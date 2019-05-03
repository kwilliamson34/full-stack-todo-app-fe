import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { TodoList } from '../todo-list';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoLists: TodoList[] = [];
  todoItems: TodoItem[] = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.refreshLists();
  }

  refreshLists(): void {
    this.todoLists = [];
    this.todoItems = [];
    this.todoService.getLists()
      .subscribe(response => {
        this.todoLists = response;
        this.todoLists.map(list => {
          this.todoService.getListItems(list.id)
            .subscribe(items => {
              items.forEach(item => {
                this.todoItems.push(item);
              })
            })
        })
      });
  }

  getItems(listId: string): TodoItem[] {
    return this.todoItems.filter(item => item.listId === listId);
  }
}
