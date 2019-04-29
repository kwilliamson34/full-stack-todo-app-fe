import { Injectable } from '@angular/core';
import { TodoList } from '../todo-list';
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
}
