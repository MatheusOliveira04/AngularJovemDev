import { TestBed } from '@angular/core/testing';

import { ExemploServiceService } from './exemplo-service.service';

describe('ExemploServiceService', () => {
  let service: ExemploServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExemploServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
