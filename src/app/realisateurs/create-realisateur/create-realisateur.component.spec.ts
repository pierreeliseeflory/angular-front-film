import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRealisateurComponent } from './create-realisateur.component';

describe('CreateRealisateurComponent', () => {
  let component: CreateRealisateurComponent;
  let fixture: ComponentFixture<CreateRealisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRealisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRealisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
