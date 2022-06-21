import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Book } from 'src/app/models/book.model';
import { State } from './books.reducer';

export const selectBooks = createFeatureSelector<State>('books');

export const selectAllBooks = createSelector(selectBooks, ({ books }) => books);

export const selectLoading = createSelector(
  selectBooks,
  ({ loading }) => loading
);

export const selectError = createSelector(selectBooks, ({ error }) => error);
