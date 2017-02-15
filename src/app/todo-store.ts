import { Injectable } from '@angular/core'

export class TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

@Injectable()
export class TodoStore {
  items: TodoItem[];

  constructor() {
    this.items = [
      {
        id: (new Date()).getTime(),
        text: 'first thing',
        completed: false
      }
    ];
  }

  getTodos(): TodoItem[] {
    return this.items;
  }
}
