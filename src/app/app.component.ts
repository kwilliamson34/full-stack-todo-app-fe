import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { TodoList } from '../todo-list';
import { TodoItem } from '../todo-item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoLists: Observable<TodoList[]>;
  todoItems: Observable<TodoItem[]>;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoLists = this.todoService.getLists();
    this.todoItems = this.todoService.getAllItems();
  }
}
