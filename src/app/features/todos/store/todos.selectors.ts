import {createSelector} from '@ngrx/store';
import {todosFeature} from './todos.reducer';

export const selectFilteredTodos = createSelector(
  todosFeature.selectList,
  todosFeature.selectFilter,
  (list, filter) => {
    if (filter === 'ALL') {
      return list;
    }
    if (filter === 'COMPLETED') {
      return list.filter(t => t.completed);
    }
    return list.filter(t => !t.completed);
  }
)
