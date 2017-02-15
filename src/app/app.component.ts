import { Component } from '@angular/core';
import { TodoStore, TodoItem } from './todo-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'todo app!';
  public list: TodoItem[];

  constructor(public store: TodoStore) {
    this.list = store.getTodos();
  }

  addTodo(inputValue: HTMLInputElement): void {
    this.list.push({
      id: (new Date()).getTime(),
      text: inputValue.value,
      completed: false
    });
    inputValue.value = null;
  }

  onElementDeleted(todo):void {
    const index = this.list.findIndex(item => item.id === todo.id);
    this.list.splice(index, 1);
  }
}
