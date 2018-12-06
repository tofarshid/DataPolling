import { Component, ViewChild, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, interval } from 'rxjs';
import { map, filter, withLatestFrom } from 'rxjs/operators';

import { Router, NavigationEnd } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss'],
})
export class MyNavComponent {

  @ViewChild('drawer') drawer: MatSidenav;
  @Input() value: number;


  constructor(private breakpointObserver: BreakpointObserver,
    router: Router) {
    
    this.value = 0;
  }

  displayPBar() {
    const observable = interval(5);
    const subscription = observable.subscribe(xy => this.value = xy);

    setTimeout(() => {
        subscription.unsubscribe();
        this.value = 0;
      }, 505);
  }

}
