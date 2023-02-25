import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  text = '';

  constructor(private todoService: TodosService) {}

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }

  addTodo(): void {
    console.log('todo: ', this.text);
    this.todoService.addTodo(this.text);
    this.text = '';
  }
}