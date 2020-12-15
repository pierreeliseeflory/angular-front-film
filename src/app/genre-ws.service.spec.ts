import { TestBed } from '@angular/core/testing';

import { GenreWSService } from './genre-ws.service';

describe('GenreWSService', () => {
  let service: GenreWSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenreWSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
