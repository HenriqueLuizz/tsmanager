import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceControllerComponent } from './service-controller.component';

describe('ServiceControllerComponent', () => {
  let component: ServiceControllerComponent;
  let fixture: ComponentFixture<ServiceControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
