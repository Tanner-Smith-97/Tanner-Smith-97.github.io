import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingSamplesComponent } from './sorting-samples.component';

describe('SortingSamplesComponent', () => {
  let component: SortingSamplesComponent;
  let fixture: ComponentFixture<SortingSamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingSamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
