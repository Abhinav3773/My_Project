import { TestBed } from '@angular/core/testing';

import { AdminappointmentlistserviceService } from './adminappointmentlistservice.service';

describe('AdminappointmentlistserviceService', () => {
  let service: AdminappointmentlistserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminappointmentlistserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
