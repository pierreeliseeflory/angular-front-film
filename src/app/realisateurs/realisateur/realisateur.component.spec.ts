import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisateurComponent } from './realisateur.component';

describe('RealisateurComponent', () => {
  let component: RealisateurComponent;
  let fixture: ComponentFixture<RealisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
