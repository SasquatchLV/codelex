import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Book } from '../../models/book.model';

export const addBook = createAction(
  '[Book List] Add Book',
  props<{ bookId: string }>()
);

export const removeBook = createAction(
  '[Book List] Remove Book',
  props<{ bookId: string }>()
);

export const loadBooks = createAction('[Book List] Load Books');

export const loadBooksSuccess = createAction(
  '[Book List] Get Books',
  props<{ books: Book[] }>()
);

export const loadBooksFailure = createAction(
  '[Book List] Get Books Failure',
  props<{ error: HttpErrorResponse }>()
);
