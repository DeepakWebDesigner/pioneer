import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftnavDashboardComponent } from './leftnav-dashboard.component';

describe('LeftnavDashboardComponent', () => {
  let component: LeftnavDashboardComponent;
  let fixture: ComponentFixture<LeftnavDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftnavDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftnavDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
