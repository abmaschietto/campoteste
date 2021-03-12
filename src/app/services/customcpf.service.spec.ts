import { TestBed } from '@angular/core/testing';

import { CustomcpfService } from './customcpf.service';

describe('CustomcpfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomcpfService = TestBed.get(CustomcpfService);
    expect(service).toBeTruthy();
  });
});
