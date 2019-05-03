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

  addItem(title): void {
    const newItem = {
      id: `${title}-${this.id}-${moment().unix()}`,
      title,
      listId: this.id,
    };

    this.todoService.addItem(newItem)
      .subscribe();
  }

  updateItem({id, title}) {
    this.items.find(item => item.id == id).title = title;
  }

  deleteItem(id) {
    this.items = this.items.filter(item => item.id !== id);
  }
}
