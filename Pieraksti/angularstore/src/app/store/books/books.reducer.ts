import { createReducer, on } from '@ngrx/store';
import * as BookActions from './books.actions';
import { Book } from '../../models/book.model';

export interface State {
  loading: boolean;
  books: Book[];
  error: string;
}

export const initialState: State = {
  books: [],
  loading: false,
  error: '',
};

export const booksReducer = createReducer(
  initialState,
  on(BookActions.loadBooks, (state) => {
    return { ...state, loading: true };
  }),
  on(BookActions.loadBooksSuccess, (state, { books }) => {
    return { ...state, loading: false, books };
  }),
  on(BookActions.loadBooksFailure, (state, { error }) => {
    return { ...state, loading: false, error: error.message, books: [] };
  }),
  on(BookActions.removeBook, (state, { bookId }) => {
    return {
      ...state,
      books: state.books.filter((book) => book.id !== bookId),
    };
  })
);
