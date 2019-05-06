import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemFormComponent } from './todo-item-form.component';

import { FormsModule } from '@angular/forms';

describe('TodoItemFormComponent', () => {
  let component: TodoItemFormComponent;
  let fixture: ComponentFixture<TodoItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemFormComponent ],
      imports: [
        FormsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemFormComponent);
    component = fixture.componentInstance;
    component.title = 'Item to update';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
