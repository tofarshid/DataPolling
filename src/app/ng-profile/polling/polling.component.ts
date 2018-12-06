import { Component, OnInit, ViewChild, ElementRef, asNativeElements } from '@angular/core';
import { PollingData } from '../../common/model';
import { Observable, Subscription, of, fromEvent, from, empty, merge, timer, interval } from 'rxjs'
import { map, mapTo, switchMap, tap, mergeMap, takeUntil, filter, 
	finalize, startWith, take, flatMap, scan, first, debounceTime, distinctUntilChanged, count } from 'rxjs/operators'

import {httpObservable} from '../../common/util';

@Component({
  selector: 'app-polling',
  templateUrl: './polling.component.html',
  styleUrls: ['./polling.component.scss']
})
export class PollingComponent implements OnInit {

  @ViewChild('start') startButton: ElementRef;
  @ViewChild('end') endButton: ElementRef;
  @ViewChild('textData') textData: ElementRef;
  value = 0;
  btnDisable = false;
  ngOnInit() {

  	let start$ = fromEvent(this.startButton.nativeElement, 'click');
  	let stop$ = fromEvent(this.endButton.nativeElement, 'click');

  	const dataStream = () => {
  		return startPolling(2000).pipe(
  			tap( x => { this.textData.nativeElement.innerHTML = x;   })
  		);
  	}


  	const startPolling = (interval: number) => {
  		this.value++;
  		return timer(0, interval).pipe(
			tap(x => {console.log('Polling '+ x); this.value = x; }),
			switchMap(_ => requestDataStream())
  		);
  	}

  	function requestDataStream() {

  		// data mapping
  		const mapData = (response) => { 
  			return of(response[0]);
  		}

  		// HTTP Request
  		const ret$ = httpObservable('https://baconipsum.com/api/?type=meat-and-filler');

  		return ret$.pipe(
  			map(res => Object.values(res)),
  			switchMap((data) => mapData(data))
  		);
  	}

    start$ = fromEvent(this.startButton.nativeElement, 'click');
    stop$ = fromEvent(this.endButton.nativeElement, 'click');

  	let main$ = start$.pipe(
      debounceTime(1000),
  		mergeMap(x => dataStream()),
    		takeUntil( 
    			merge( stop$ ) 
    		)
  	);

  	const main = () => main$.subscribe({
      next: () => {},
  		complete: () => {
  				main();
          this.btnDisable = false;
  			}
  		}
  	);

  	main();

  }

  startClick(){
    this.btnDisable = true;
  }
}


