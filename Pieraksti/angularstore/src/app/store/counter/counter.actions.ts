import { createAction } from '@ngrx/store';

export const incrementCount = createAction('[Counter Component] Increment');
export const decrementCount = createAction('[Counter Component] Decrement');
export const resetCount = createAction('[Counter Component] Reset');
