import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdev1040Component } from './sdev1040.component';

describe('SDEV1040Component', () => {
  let component: Sdev1040Component;
  let fixture: ComponentFixture<Sdev1040Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sdev1040Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sdev1040Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
