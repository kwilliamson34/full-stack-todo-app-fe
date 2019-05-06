import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../../todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() public update: EventEmitter<any> = new EventEmitter();
  @Output() public delete: EventEmitter<any> = new EventEmitter();
  isEditing: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  onClickEdit() {
    this.isEditing = !this.isEditing;
  }

  onClickDelete() {
    this.delete.emit(this.item.id);
  }

  updateDone() {
    this.item.done = !this.item.done;
    this.update.emit(this.item);
  }

  updateTitle($event: string) {
    this.item.title = $event;
    this.update.emit(this.item);
  }
}
