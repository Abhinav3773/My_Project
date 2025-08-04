import { TestBed } from '@angular/core/testing';

import { MyappointmentsService } from './myappointments.service';

describe('MyappointmentsService', () => {
  let service: MyappointmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyappointmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
