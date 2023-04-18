import { Todo } from '../../todo/todo.model';
import { createReducer, on } from '@ngrx/store';
import {
  addTodo,
  loadTodos,
  loadTodosFailure,
  loadTodosSuccess,
  removeTodo,
} from './todo.actions';

export interface TodoState {
  todos: Todo[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: TodoState = {
  todos: [],
  error: null,
  status: 'pending',
};

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { id, todo, completed, userId }) => ({
    ...state,
    todos: [
      ...state.todos,
      {
        id: id,
        todo: todo,
        completed: completed,
        userId: userId,
      },
    ],
  })),
  on(removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
  on(loadTodos, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(loadTodosSuccess, (state, payload) => ({
    ...state,
    todos: payload.todos,
    error: null,
    status: 'success',
  })),
  on(loadTodosFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
