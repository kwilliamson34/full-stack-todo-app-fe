import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';
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

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

  addItem(title: string): void {
    const newItem = {
      id: `${this.id}-${moment().unix()}`,
      title,
      listId: this.id,
      done: false
    };

    this.todoService.addOrUpdateItem(newItem)
      .subscribe();
  }

  updateItem(item: TodoItem) {
    this.todoService.addOrUpdateItem(item)
      .subscribe();
  }

  deleteItem(id: string) {
    this.todoService.deleteItem(id)
      .subscribe();
  }
}
