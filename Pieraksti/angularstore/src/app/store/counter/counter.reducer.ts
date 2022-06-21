import { createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.incrementCount, (state) => state + 1),
  on(CounterActions.decrementCount, (state) => state - 1),
  on(CounterActions.resetCount, (state) => 0)
);
