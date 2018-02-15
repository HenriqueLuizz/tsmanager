import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsGridComponent } from './tms-grid.component';

describe('TmsGridComponent', () => {
  let component: TmsGridComponent;
  let fixture: ComponentFixture<TmsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
