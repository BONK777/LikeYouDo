/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BePerformerComponent } from './be-performer.component';

describe('BePerformerComponent', () => {
  let component: BePerformerComponent;
  let fixture: ComponentFixture<BePerformerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BePerformerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BePerformerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
