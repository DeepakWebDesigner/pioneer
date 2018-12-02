import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenratePackageComponent } from './genrate-package.component';

describe('GenratePackageComponent', () => {
  let component: GenratePackageComponent;
  let fixture: ComponentFixture<GenratePackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenratePackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenratePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
