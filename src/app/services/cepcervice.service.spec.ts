import { TestBed } from '@angular/core/testing';

import { CepcerviceService } from './cepcervice.service';

describe('CepcerviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CepcerviceService = TestBed.get(CepcerviceService);
    expect(service).toBeTruthy();
  });
});
