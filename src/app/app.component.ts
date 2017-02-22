import { Component } from '@angular/core';
// import { TodoStore, TodoItem } from './todo-store';
import { Store } from '@ngrx/store';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string = 'todo app!';
  public list;
  private filterApplied: string = 'all';
  private listSubscription;

  constructor(public store: Store<any>) {
    // this.listSubscription = this.store.select('todos')
    //   .subscribe(todo => {
    //     this.list = todo;
    //   });
    this.list = Observable.combineLatest(
      this.store.select('todos'),
      this.store.select('filter'),
      (todos, filter) => {
        return todos.filter(filter);
      }
    );
  }

  // filterList(list) {
  //   switch (this.filterApplied) {
  //     case 'all':
  //       return list.concat([]);
  //     case 'active':
  //       return list.filter(todo => !todo.completed);
  //     case 'completed':
  //       return list.filter(todo => todo.completed);
  //   }
  // }

  setVisibilityFilter(event, filter): void {
    event.preventDefault();
    // this.filterApplied = filter;
    this.store.dispatch({
      type: filter
    });
  }

  ngOnDestroy() {
    this.listSubscription.unsubscribe();
  }
}
