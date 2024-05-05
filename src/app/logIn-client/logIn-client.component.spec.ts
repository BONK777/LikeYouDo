/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogInClientComponent } from './logIn-client.component';

describe('LogInClientComponent', () => {
  let component: LogInClientComponent;
  let fixture: ComponentFixture<LogInClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
