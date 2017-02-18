import { Component } from '@angular/core';
import { TodoStore, TodoItem } from './todo-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string = 'todo app!';
  private list: TodoItem[];
  private filterApplied: string = 'all';

  constructor(public store: TodoStore) {
    this.list = store.getTodos();
  }

  onTodoAdded(event): void {
    this.list.push(event);
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

  onTodoChecked(event): void {
    const index = this.list.findIndex(item => item.id === event.todo.id);
    const updatedTodo = this.list[index];
    updatedTodo.completed = event.checked;
    this.list.splice(index, 1, updatedTodo);
  }

  filterList(list) {
    switch (this.filterApplied) {
      case 'all':
        return list.concat([]);
      case 'active':
        return list.filter(todo => !todo.completed);
      case 'completed':
        return list.filter(todo => todo.completed); 
    }
  }

  setVisibilityFilter(event, filter): void {
    event.preventDefault();
    this.filterApplied = filter;
  }
}
