import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgProfileComponent } from './ng-profile.component';

describe('NgProfileComponent', () => {
  let component: NgProfileComponent;
  let fixture: ComponentFixture<NgProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
