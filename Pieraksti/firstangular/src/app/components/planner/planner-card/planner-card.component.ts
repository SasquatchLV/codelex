import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-planner-card',
  templateUrl: './planner-card.component.html',
  styleUrls: ['./planner-card.component.scss'],
})
export class PlannerCardComponent {
  @Input() task?: Task;
  @Output() deleteTaskEvent = new EventEmitter<null>();

  showAnswer = false;

  toggleShowAnswer(): void {
    this.showAnswer = !this.showAnswer;
  }

  deleteTask(): void {
    this.deleteTaskEvent.emit();
  }
}
