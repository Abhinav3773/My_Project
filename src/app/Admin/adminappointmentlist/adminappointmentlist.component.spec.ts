import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminappointmentlistComponent } from './adminappointmentlist.component';

describe('AdminappointmentlistComponent', () => {
  let component: AdminappointmentlistComponent;
  let fixture: ComponentFixture<AdminappointmentlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminappointmentlistComponent]
    });
    fixture = TestBed.createComponent(AdminappointmentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
