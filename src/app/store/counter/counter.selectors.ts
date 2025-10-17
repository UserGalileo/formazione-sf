import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CounterState} from './counter.reducer';

export const selectCount = createFeatureSelector<CounterState>('counter');

export const selectCountValue = createSelector(
  selectCount,
  state => state.value
)
