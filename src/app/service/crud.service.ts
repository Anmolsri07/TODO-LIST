import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000';
  }
  addTask(task: Task) {
    return this.http.post(this.url + '/task', task);
  }
  getAllTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url + '/task');
  }
  deleteTask(task: any) {
    return this.http.delete(this.url + '/task/' + task);
  }
  editTask(task: any, id: any) {
    return this.http.put<Task>(this.url + '/task/' + id, task);
  }
}
