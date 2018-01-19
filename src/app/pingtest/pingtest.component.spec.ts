import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PingtestComponent } from './pingtest.component';

describe('PingtestComponent', () => {
  let component: PingtestComponent;
  let fixture: ComponentFixture<PingtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PingtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PingtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
