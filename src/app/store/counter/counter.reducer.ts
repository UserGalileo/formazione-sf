import {createReducer, on} from '@ngrx/store';
import {decrementButtonPressed, incrementButtonPressed} from './counter.actions';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
}

export const counterReducer = createReducer(
  initialState,
  on(incrementButtonPressed, (state) => ({ ...state, value: state.value + 1 })),
  on(decrementButtonPressed, (state) => ({ ...state, value: state.value - 1 })),
);
