/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogInPerformerComponent } from './logIn-performer.component';

describe('LogInPerformerComponent', () => {
  let component: LogInPerformerComponent;
  let fixture: ComponentFixture<LogInPerformerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInPerformerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInPerformerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
