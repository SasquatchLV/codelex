import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-planner-card',
  templateUrl: './planner-card.component.html',
  styleUrls: ['./planner-card.component.scss'],
})
export class PlannerCardComponent {
  @Input() task?: string;

  @Output() deleteTaskEvent = new EventEmitter<null>();

  deleteTask(): void {
    this.deleteTaskEvent.emit();
  }
}
