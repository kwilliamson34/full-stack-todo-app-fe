import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item-form',
  templateUrl: './todo-item-form.component.html',
  styleUrls: ['./todo-item-form.component.scss']
})
export class TodoItemFormComponent implements OnInit {
  @Input() title: string;
  @Output() public save: EventEmitter<any> = new EventEmitter();
  @Output() public exit: EventEmitter<any> = new EventEmitter();

  initialValue: string = '';

  constructor() {
  }

  ngOnInit() {
    this.initialValue = this.title;
  }

  onClickSave() {
    this.save.emit(this.title);
    this.exit.emit();
  }

  onClickDiscard() {
    this.exit.emit();
  }
}
