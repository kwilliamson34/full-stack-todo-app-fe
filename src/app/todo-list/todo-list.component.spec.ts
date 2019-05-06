import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoItem } from '../../todo-item';
import { Observable} from 'rxjs';

import { TodoListComponent } from './todo-list.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoItemFormComponent } from '../todo-item-form/todo-item-form.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoListComponent,
        TodoItemComponent,
        TodoItemFormComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    component.items = new Observable<TodoItem[]>();
    component.title = 'List 1';
    component.id = 'list-1';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h2 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2')).toBeTruthy();
  });
});
