import { Actions, createEffect } from '@ngrx/effects';
import { BooksService } from 'src/app/services/books.services';
import * as BookActions from '../../store/books/books.actions';
import { ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class BooksEffects {
  constructor(private actions$: Actions, private booksService: BooksService) {}

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.loadBooks),
      switchMap(() => {
        return this.booksService.getBooks().pipe(
          map((books) => {
            return BookActions.loadBooksSuccess({ books: books });
          }),
          catchError((error) => {
            return of(BookActions.loadBooksFailure({ error }));
          })
        );
      })
    )
  );
}
