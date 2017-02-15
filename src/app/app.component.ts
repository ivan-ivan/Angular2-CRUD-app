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

  addTodo(input: HTMLInputElement): void {
    this.list.push({
      id: (new Date()).getTime(),
      text: input.value,
      completed: false
    });
    input.value = null;
  }

  onTodoDeleted(todo):void {
    const index = this.list.findIndex(item => item.id === todo.id);
    this.list.splice(index, 1);
  }

  onTodoUpdated(event): void {
    const index = this.list.findIndex(item => item.id === event.todo.id);
    const updatedTodo = this.list[index];
    updatedTodo.text = event.inputValue;
    this.list.splice(index, 1, updatedTodo);
  }
}
