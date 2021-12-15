import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDEV2520Component } from './sdev2520.component';

describe('SDEV2520Component', () => {
  let component: SDEV2520Component;
  let fixture: ComponentFixture<SDEV2520Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SDEV2520Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SDEV2520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
