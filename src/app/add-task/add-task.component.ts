import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from '../model/task';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  show: any;

  constructor(private crudService: CrudService) {
    this.allTaskget();
  }

  isEdit = false;
  isOpenid: number = 0;
  edit(id: any) {
    this.isOpenid = id;
    this.isEdit = !this.isEdit;
  }

  task = new FormGroup({
    new_task: new FormControl('', [Validators.required]),
  });
  new_task_submit(data: any) {
    // console.log(data);
    this.crudService.addTask(data).subscribe((result) => {
      console.log(result);
    });
    this.allTaskget();
    this.task.reset();
    window.location.reload();
  }

  update_task = new FormGroup({
    input_update: new FormControl('', [Validators.required]),
  });
  submit_update(id: any) {
    console.log(this.update_task.value);
    this.crudService
      .editTask(
        {
          new_task: this.update_task.value.input_update,
        },
        id
      )
      .subscribe((result) => {
        console.log(result);
      });
    this.update_task.reset();
    window.location.reload();
  }

  allTaskget() {
    this.crudService.getAllTask().subscribe((result) => {
      console.log(result);
      this.show = result;
    });
  }
  get user() {
    return this.task.get('new_task');
  }
  delete(data: any) {
    // console.log(data);
    this.crudService.deleteTask(data).subscribe((result) => {
      console.log(result);
    });
    this.allTaskget();
  }
}
