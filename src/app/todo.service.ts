import { Injectable } from '@angular/core';
import { TodoList } from '../todo-list';
import { TodoItem } from '../todo-item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "Accept": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getLists(): Observable<TodoList[]> {
    return this.http.get<TodoList[]>('http://localhost:8080/api/lists', httpOptions);
  }

  getListItems(id: string): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(`http://localhost:8080/api/lists/${id}`, httpOptions);
  }

  addOrUpdateItem(item: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>('http://localhost:8080/api/item', item, httpOptions);
  }

  deleteItem(id: string): Observable<TodoItem> {
    return this.http.delete<TodoItem>(`http://localhost:8080/api/item/${id}`, httpOptions);
  }
}
