import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-planner-list',
  templateUrl: './planner-list.component.html',
  styleUrls: ['./planner-list.component.scss'],
})
export class PlannerListComponent {
  @Input() tasks: string[] | undefined;
}
