import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';
import { TodoItem } from '../../todo-item';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() id: string;
  @Input() title: string;
  @Input() items: Observable<TodoItem[]>;
  localItems: TodoItem[] = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.items.subscribe((items) => {
      this.localItems = items.filter(i => i.listId === this.id);
    });
  }

  ngOnChanges() {
  }

  addItem(title: string): void {
    const newItem = {
      id: `item-${this.id}-${Date.now()}`,
      title,
      listId: this.id,
      done: false
    };

    this.todoService.addOrUpdateItem(newItem)
      .subscribe(() => {
        this.localItems.push(newItem);
      });
  }

  updateItem(item: TodoItem) {
    this.todoService.addOrUpdateItem(item)
      .subscribe(() => {
        this.localItems = this.localItems.map(li => li.id === item.id ? item : li)
      });
  }

  deleteItem(id: string) {
    this.todoService.deleteItem(id)
      .subscribe(() => {
        this.localItems = this.localItems.filter(li => li.id !== id);
      });
  }
}
