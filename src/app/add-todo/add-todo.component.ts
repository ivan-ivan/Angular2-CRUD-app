import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as constants from '../constants';

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
    const inputValue = input.value;

    inputValue && this.store.dispatch({
      type: constants.ADD_TODO,
      payload: {
        id: (new Date()).getTime(),
        text: inputValue,
        completed: false
      }
    });
    input.value = null;
  }
}
