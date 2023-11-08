/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SubskillsComponent } from './subskills.component';

describe('SubskillsComponent', () => {
  let component: SubskillsComponent;
  let fixture: ComponentFixture<SubskillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubskillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
