import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTaskTimerComponent } from './app-task-timer.component';

describe('AppTaskTimerComponent', () => {
  let component: AppTaskTimerComponent;
  let fixture: ComponentFixture<AppTaskTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTaskTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTaskTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
