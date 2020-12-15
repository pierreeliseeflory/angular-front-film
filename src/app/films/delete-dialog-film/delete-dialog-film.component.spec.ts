import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDialogFilmComponent } from './delete-dialog-film.component';

describe('DeleteDialogFilmComponent', () => {
  let component: DeleteDialogFilmComponent;
  let fixture: ComponentFixture<DeleteDialogFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDialogFilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDialogFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
