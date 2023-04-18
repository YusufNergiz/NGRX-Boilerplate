import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/todo/todo.model';

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ id: number; todo: string; completed: boolean; userId: number }>()
);

export const removeTodo = createAction(
  '[Todo] Remove Todo',
  props<{ id: number }>()
);

export const loadTodos = createAction('[Todo] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todo] Load Todos Success',
  props<{ todos: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todo] Load Todos Failure',
  props<{ error: string }>()
);
