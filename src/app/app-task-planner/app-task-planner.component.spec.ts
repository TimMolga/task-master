import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTaskPlannerComponent } from './app-task-planner.component';

describe('AppTaskPlannerComponent', () => {
  let component: AppTaskPlannerComponent;
  let fixture: ComponentFixture<AppTaskPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTaskPlannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTaskPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
