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
  private listSubscription;
  private currentFilter;

  constructor(private store: Store<any>) {
    const todos = store.select('todos');
    const filter: any = store.select('filter');

    this.listSubscription = Observable.combineLatest(
      todos,
      filter,
      (todos: any, filter: any) => {
        this.currentFilter = filter.type;
        return todos.filter(filter.func);
      }
    );

    this.listSubscription.subscribe(
      filteredList => this.list = filteredList,
      error => console.log(`Error occured: ${error.name}`)
    );
  }

  setVisibilityFilter(event, filter): void {
    event.preventDefault();
    this.store.dispatch({
      type: filter
    });
  }

  ngOnDestroy() {
    this.listSubscription.unsubscribe();
  }
}
