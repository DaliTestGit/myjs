import { TestBed, inject } from '@angular/core/testing';

import { AboutBackendService } from './about-backend.service';

describe('AboutBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutBackendService]
    });
  });

  it('should be created', inject([AboutBackendService], (service: AboutBackendService) => {
    expect(service).toBeTruthy();
  }));
});
