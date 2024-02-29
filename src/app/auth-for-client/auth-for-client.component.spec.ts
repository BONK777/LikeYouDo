/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AuthForClientComponent } from './auth-for-client.component';

describe('AuthForClientComponent', () => {
  let component: AuthForClientComponent;
  let fixture: ComponentFixture<AuthForClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthForClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthForClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
