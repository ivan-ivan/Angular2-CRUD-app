import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../todo-store';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  public todo: TodoItem;
  @Output()
  public elementDeleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeTodo():void {
    this.elementDeleted.emit(this.todo);
  }
}
