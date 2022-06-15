import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-planner-list',
  templateUrl: './planner-list.component.html',
  styleUrls: ['./planner-list.component.scss'],
})
export class PlannerListComponent {
  @Input()
  tasks?: Task[];

  @Output() deleteTaskEvent = new EventEmitter<number>();

  deleteTask(index: number): void {
    this.deleteTaskEvent.emit(index);
  }
}
