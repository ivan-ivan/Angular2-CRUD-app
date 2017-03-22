import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/filter';
import any = jasmine.any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public list;
  public currentFilter;
  private listSubscription;
  private todos;
  private filter;

  constructor(private store: Store<any>) {
    this.todos = store.select('todos');
    this.filter = store.select('filter');

    this.listSubscription = Observable.combineLatest(
      this.todos,
      this.filter,
      (todos: any, filter: any) => {
        this.currentFilter = filter.type;
        return todos.filter(filter.func);
      }
    );

    this.listSubscription.subscribe(
      filteredList => this.list = filteredList,
      error => this.errorHandler(error)
    );
  }

  setVisibilityFilter(event, filter): void {
    event.preventDefault();
    let todoList;

    this.todos.subscribe(
      todos => todoList = todos,
      error => this.errorHandler(error)
    );

    if (filter === 'COMPLETED' &&
      todoList.every(todo => todo.completed === false)) {
       return;
    }

    if (filter === 'ACTIVE' &&
      todoList.every(todo => todo.completed === true)) {
      return;
    }

    this.store.dispatch({
      type: filter
    });
  }

  errorHandler(error: any): void {
    console.log(`Error occured: ${error.name}`);
  }

  ngOnDestroy() {
    this.listSubscription.unsubscribe();
  }
}
