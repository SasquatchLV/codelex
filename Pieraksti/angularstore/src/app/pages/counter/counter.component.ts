import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CounterActions from '../../store/counter/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  count$ = this.store.select('count');

  constructor(private store: Store<{ count: number }>) {
    // TODO: Connect `this.count$` stream to the current store `count` state
  }

  increment(): void {
    // TODO: Dispatch an increment action
    this.store.dispatch(CounterActions.incrementCount());
  }

  decrement(): void {
    // TODO: Dispatch a decrement action
    this.store.dispatch(CounterActions.decrementCount());
  }

  reset(): void {
    // TODO: Dispatch a reset action
    this.store.dispatch(CounterActions.resetCount());
  }
}
