import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  constructor(private http: HttpClient) {}

  getAllTodos() {
    return this.http
      .get('https://dummyjson.com/todos')
      .pipe(map((response: any) => response.todos));
  }
}
