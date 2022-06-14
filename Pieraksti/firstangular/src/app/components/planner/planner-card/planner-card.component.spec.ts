import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerCardComponent } from './planner-card.component';

describe('PlannerCardComponent', () => {
  let component: PlannerCardComponent;
  let fixture: ComponentFixture<PlannerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
