import { TestBed } from '@angular/core/testing';

import { ShowServicesService } from './show-services.service';

describe('ShowServicesService', () => {
  let service: ShowServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
