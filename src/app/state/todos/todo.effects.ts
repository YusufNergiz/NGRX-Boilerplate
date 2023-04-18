import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import {
  loadTodos,
  loadTodosFailure,
  loadTodosSuccess,
  addTodo,
} from './todo.actions';
import { TodoServiceService } from 'src/app/todo/todo-service.service';
import { of, from } from 'rxjs';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private todoService: TodoServiceService
  ) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.todoService.getAllTodos()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((todos: any) => loadTodosSuccess({ todos: todos })),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(loadTodosFailure({ error })))
        )
      )
    )
  );
}
