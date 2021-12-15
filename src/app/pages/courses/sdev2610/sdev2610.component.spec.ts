import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdev2610Component } from './sdev2610.component';

describe('SDEV2610Component', () => {
  let component: Sdev2610Component;
  let fixture: ComponentFixture<Sdev2610Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sdev2610Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sdev2610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
