import { createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';
import { AppState } from '../app.state';

export const selectTodos = (state: AppState) => state.todos;
export const selectAllTodos = createSelector(
  selectTodos,
  (state: TodoState) => {
    return state.todos;
  }
);
