import { Component } from '@angular/core';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
})
export class PlannerComponent {
  tasks = ['Buy tesla', 'Buy car', 'Buy house'];

  addTask(task: string): void {
    this.tasks.push(task);
  }
}
