import {Component, computed, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Store} from '@ngrx/store';
import {todosActions} from './store/todos.actions';
import {todosFeature} from './store/todos.reducer';
import {selectFilteredTodos} from './store/todos.selectors';

@Component({
  selector: 'app-todos',
  imports: [
    ReactiveFormsModule
  ],
  template: `
    <form [formGroup]="todoForm" (ngSubmit)="addTodo()">
      <input type="text" formControlName="text">
    </form>

    <select [value]="filter()" (input)="changeFilter($event)">
      <option value="ALL">All</option>
      <option value="COMPLETED">Completed</option>
      <option value="ACTIVE">Active</option>
    </select>

    @if (loading()) {
      Caricamento...
    } @else {
      <ul>
        @for (todo of todos(); track todo.id) {
            <li>
              <input type="checkbox" [checked]="todo.completed" (input)="toggleTodo(todo.id)">
              {{ todo.text }}
              <button (click)="removeTodo(todo.id)">Remove</button>
            </li>
        }
      </ul>
    }
  `
})
export class Todos {

  store = inject(Store);

  todos = this.store.selectSignal(selectFilteredTodos);
  loading = this.store.selectSignal(todosFeature.selectLoading);
  filter = this.store.selectSignal(todosFeature.selectFilter);

  todoForm = new FormGroup({
    text: new FormControl('', { nonNullable: true })
  });

  ngOnInit() {
    this.store.dispatch(todosActions.todosPageEnter());
  }

  addTodo() {
    this.store.dispatch(todosActions.formSubmit({ text: this.todoForm.controls.text.value }));
    this.todoForm.controls.text.reset();
  }

  removeTodo(id: string) {
    this.store.dispatch(todosActions.removeButtonPressed({ id }));
  }

  toggleTodo(id: string) {
    this.store.dispatch(todosActions.toggleTodo({ id }));
  }

  changeFilter(e: Event) {
    const filter = (e.target as HTMLSelectElement).value as any;
    this.store.dispatch(todosActions.filterChanged({ filter }));
  }

}
