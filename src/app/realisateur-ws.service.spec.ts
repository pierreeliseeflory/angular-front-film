import { TestBed } from '@angular/core/testing';

import { RealisateurWSService } from './realisateur-ws.service';

describe('RealisateurWSService', () => {
  let service: RealisateurWSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealisateurWSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
