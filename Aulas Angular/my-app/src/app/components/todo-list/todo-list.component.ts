import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public task = '';
  public items = ['item 1', 'item 2', 'item 3', 'item 4'];

  addTask() {
    this.items.push(this.task);
  }

  removeTask(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  constructor() {}

  ngOnInit() {}
}
