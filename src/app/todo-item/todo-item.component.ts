import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../todo-store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  public onEdited: boolean = false;
  private delay: number = 200;
  private timer;
  private prevent: boolean = false;

  @Input()
  public todo: TodoItem;

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  removeTodo(): void {
    this.store.dispatch({
      type: 'DELETE_TODO',
      payload: {
        id: this.todo.id
      }
    });
  }

  toggleTodo(): void {
    clearTimeout(this.timer);
    this.prevent = true;

    this.onEdited = !this.onEdited;
  }

  updateTodo(input: HTMLInputElement): void {
    this.store.dispatch({
      type: 'UPDATE_TODO',
      payload: {
        id: this.todo.id,
        text: input.value
      }
    });

    this.toggleTodo();
  }

  checkTodo(): void {
    this.timer = setTimeout(() => {
      if (!this.prevent) {
        // this.todoChecked.emit({
        //   todo: this.todo,
        //   checked: !this.todo.completed
        // });
        this.store.dispatch({
          type: 'TOGGLE_TODO',
          payload: {
            id: this.todo.id,
            completed: !this.todo.completed
          }
        });
      }
      this.prevent = false;
    }, this.delay);
  }
}
