import { TestBed } from '@angular/core/testing';

import { FilmWSService } from './film-ws.service';

describe('FilmWSService', () => {
  let service: FilmWSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmWSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
