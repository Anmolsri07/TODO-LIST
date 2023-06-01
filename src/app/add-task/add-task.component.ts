import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  isEdit = false;
  edit() {
    return (this.isEdit = !this.isEdit);
  }

  task = new FormGroup({
    new_task: new FormControl('', [Validators.required]),
  });
  new_task_submit() {
    console.log(this.task.value);
  }

  update_task = new FormGroup({
    input_update: new FormControl('', [Validators.required]),
  });
  submit_update() {
    console.log(this.update_task.value);
  }

  get user() {
    return this.task.get('new_task');
  }
}
