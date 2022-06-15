import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
})
export class PlannerComponent implements OnInit {
  tasks = [] as Task[];

  ngOnInit(): void {
    if (!localStorage.getItem('tasks')) {
      this.tasks = [];
    } else {
      this.tasks = JSON.parse(localStorage.getItem('tasks')!);
    }
  }

  addTask(task: Task): void {
    this.tasks = [...this.tasks, task];
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
