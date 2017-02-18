import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output()
  public todoAdded: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addTodo(input: HTMLInputElement): void {
    this.todoAdded.emit({
      id: (new Date()).getTime(),
      text: input.value,
      completed: false
    });
    input.value = null;
  }

}
