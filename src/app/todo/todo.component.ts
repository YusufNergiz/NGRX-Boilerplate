import { Component, OnInit } from '@angular/core';
import { addTodo, removeTodo, loadTodos } from '../state/todos/todo.actions';
import { Todo } from './todo.model';
import { selectAllTodos } from '../state/todos/todo.selector';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  public allTodos$: Observable<Todo[]>;

  public todo: Todo = {
    id: 0,
    todo: '',
    completed: false,
    userId: Math.floor(Math.random() * 100),
  };

  constructor(private store: Store<AppState>) {
    this.allTodos$ = this.store.select(selectAllTodos);
    console.log(this.todo.todo);
  }

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }

  addTodo() {
    this.store.dispatch(
      addTodo({
        id: Math.floor(Math.random() * 10),
        todo: this.todo.todo,
        completed: this.todo.completed,
        userId: this.todo.userId,
      })
    );
    this.todo = {
      id: 0,
      todo: '',
      completed: false,
      userId: 0,
    };
  }

  removeTodo(id: number) {
    this.store.dispatch(removeTodo({ id: id }));
  }
}
