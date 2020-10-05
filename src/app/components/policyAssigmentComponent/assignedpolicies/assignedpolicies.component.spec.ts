import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedpoliciesComponent } from './assignedpolicies.component';

describe('AssignedpoliciesComponent', () => {
  let component: AssignedpoliciesComponent;
  let fixture: ComponentFixture<AssignedpoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedpoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedpoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
