import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-planner-form',
  templateUrl: './planner-form.component.html',
  styleUrls: ['./planner-form.component.scss'],
})
export class PlannerFormComponent implements OnInit {
  @ViewChild('taskInput', { static: true }) taskInput: ElementRef | undefined;

  @Output() addTaskEvent = new EventEmitter<string>();
  plannerForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
    this.taskInput?.nativeElement.focus();
  }

  addTask(): void {
    this.plannerForm.markAllAsTouched();
    if (this.plannerForm.valid) {
      this.addTaskEvent.emit(this.plannerForm.value.task);
      this.plannerForm.reset();
      this.taskInput?.nativeElement.focus();
    }
  }

  buildForm(): void {
    this.plannerForm = this.fb.group({
      task: ['', [Validators.required]],
      age: [''],
    });
  }
}
