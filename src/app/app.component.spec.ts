import { TestBed, async } from '@angular/core/testing';
import { TodoService } from './todo.service';

import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoItemFormComponent } from './todo-item-form/todo-item-form.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('TodoService', ['getAllItems', 'getLists']);
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TodoListComponent,
        TodoItemComponent,
        TodoItemFormComponent
      ],
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      providers: [
        { provide: TodoService, useValue: spy }
      ]
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('My Lists');
  });

  // it(`should have the correct number of app-todo-lists`, () => {
  //   let serviceSpy = TestBed.get(TodoService);
  //   let mockList: TodoItem[] = [];
  //   let mockTodo = new TodoItem();
  //   mockTodo.title = 'item-1';
  //   mockList.push(mockTodo);
  //   mockTodo.title = 'item-2';
  //   mockList.push(mockTodo);

  //   serviceSpy.getAllItems.and.returnValue(of(mockList));
  //   serviceSpy.getAllItems.subscribe(result => {
  //     expect(result.length).toEqual(2);
  //   })

  //   const fixture = TestBed.createComponent(AppComponent);
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.app-todo-list').length).toEqual(2);
  // });
});
