import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  public isEdit: boolean = false;
  constructor() { }

  edit() {
    console.log("click" + this.isEdit);
    return this.isEdit = !this.isEdit;
  }


}
