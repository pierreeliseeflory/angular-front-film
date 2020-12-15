import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRealisateursComponent } from './filter-realisateurs.component';

describe('FilterRealisateursComponent', () => {
  let component: FilterRealisateursComponent;
  let fixture: ComponentFixture<FilterRealisateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterRealisateursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterRealisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
