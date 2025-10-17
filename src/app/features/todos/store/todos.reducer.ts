import {createFeature, createReducer, on} from '@ngrx/store';
import {Todo} from '../../../services/todos.service';
import {todosActions} from './todos.actions';

export interface TodosState {
  list: Todo[];
  loading: boolean;
  filter: 'ALL' | 'COMPLETED' | 'ACTIVE';
}

const initialState: TodosState = {
  list: [],
  loading: false,
  filter: 'ALL',
}

export const todosFeature = createFeature({
  name: 'todos',
  reducer: createReducer(
    initialState,
    on(todosActions.todosPageEnter, state => ({ ...state, loading: true })),
    on(todosActions.getTodosSuccess, (state, action) => ({ ...state, list: action.todos, loading: false })),
    on(todosActions.getTodosFail, state => ({ ...state, loading: false })),
    on(todosActions.addTodoSuccess, (state, action) => ({ ...state, list: [ ...state.list, action.todo ] })),
    on(todosActions.removeTodoSuccess, (state, action) => ({ ...state, list: state.list.filter(t => t.id !== action.todo.id) })),
    on(todosActions.toggleTodoSuccess, (state, action) => ({ ...state, list: state.list.map(t => t.id === action.todo.id ? action.todo : t) })),
    on(todosActions.filterChanged, (state, action) => ({ ...state, filter: action.filter }))
  )
});
