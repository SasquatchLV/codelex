import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as BookSelectors from '../../store/books/books.selectors';
import * as BookActions from '../../store/books/books.actions';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books$ = this.store.select(BookSelectors.selectAllBooks);
  loading$ = this.store.select(BookSelectors.selectLoading);
  error$ = this.store.select(BookSelectors.selectError);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(BookActions.loadBooks());
  }

  removeBook(id: string): void {
    this.store.dispatch(BookActions.removeBook({ bookId: id }));
  }
}
