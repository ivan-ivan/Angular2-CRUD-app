import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../todo-store';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  public onEdited: boolean = false;

  @Input()
  public todo: TodoItem;
  @Output()
  public todoRemoved: EventEmitter<any> = new EventEmitter();
  @Output()
  public todoUpdated: EventEmitter<any> = new EventEmitter();
  @Output()
  public todoChecked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeTodo(): void {
    this.todoRemoved.emit(this.todo);
  }

  toggleTodo(): void {
    this.onEdited = !this.onEdited;
  }

  updateTodo(input: HTMLInputElement): void {
    this.todoUpdated.emit({
      todo: this.todo,
      inputValue: input.value
    });
    this.toggleTodo();
  }

  onChecked(): void {
    this.todoChecked.emit({
      todo: this.todo,
      checked: !this.todo.completed
    });
  }
}
