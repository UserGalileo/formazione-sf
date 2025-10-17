import {createAction, createActionGroup, emptyProps, props} from '@ngrx/store';
import {Todo} from '../../../services/todos.service';

/**
export const todoFormSubmit = createAction('[Todos] Form submit', props<{ text: string }>());
export const todoRemoveButtonPressed = createAction('[Todos] Remove button pressed', props<{ id: string }>());
*/

export const todosActions = createActionGroup({
  source: 'Todos',
  events: {
    'Form submit': props<{ text: string }>(),
    'Remove button pressed': props<{ id: string }>(),
    'Remove todo success': props<{ todo: Todo }>(),
    'Todos page enter': emptyProps(),
    'Get todos success': props<{ todos: Todo[] }>(),
    'Get todos fail': emptyProps(),
    'Add todo success': props<{ todo: Todo }>(),
    'Toggle todo': props<{ id: string }>(),
    'Toggle todo success': props<{ todo: Todo }>(),
    'Filter changed': props<{ filter: 'ALL' | 'COMPLETED' | 'ACTIVE' }>()
  },
})

