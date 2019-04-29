import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../../todo-item';
import moment from 'moment';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() id: string;
  @Input() title: string;
  @Input() items: TodoItem[];
  date: string = moment().format("M/D/YY");

  constructor() {
  }

  ngOnInit() {
  }

  addItem(title) {
    this.items.push({
      id: moment().toString(),
      listId: this.id,
      title,
      done: false
    })
  }

  updateItem({id, title}) {
    this.items.find(item => item.id == id).title = title;
  }

  deleteItem(id) {
    this.items = this.items.filter(item => item.id !== id);
  }
}
