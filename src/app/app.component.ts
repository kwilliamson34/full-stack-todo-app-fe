import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { TodoList } from '../todo-list';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoLists: TodoList[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.getLists();
  }

  getLists(): void {
    this.todoService.getLists()
      .subscribe(todoLists => {
        this.todoLists = todoLists;
        console.log('LISTS',this.todoLists);
      });
    
  }
}
