import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  addTodo(input: HTMLInputElement): void {
    this.store.dispatch({
      type: 'ADD_TODO',
      payload: {
        id: (new Date()).getTime(),
        text: input.value,
        completed: false
      }
    });
    input.value = null;
  }
}
