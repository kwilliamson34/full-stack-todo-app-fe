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
    //TODO inject and use service for persistence
  }

  ngOnInit() {
  }

  onClickItem() {
    this.item.done = !this.item.done;
  }

  onClickEdit() {
    this.isEditing = !this.isEditing;
  }

  onClickDelete() {
    this.delete.emit(this.item.id);
  }

  updateItem($event: string) {
    const updatedItem = Object.assign({}, this.item, {title: $event})
    this.update.emit(updatedItem);
  }
}
