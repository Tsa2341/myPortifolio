import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadCrumbsIconComponent } from './bread-crumbs-icon.component';

describe('BreadCrumbsIconComponent', () => {
  let component: BreadCrumbsIconComponent;
  let fixture: ComponentFixture<BreadCrumbsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadCrumbsIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadCrumbsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
