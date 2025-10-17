import {Injectable} from '@angular/core';
import {delay, of} from 'rxjs';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

let todos: Todo[] = [
  {
    id: '1',
    text: 'fare la spesa',
    completed: false
  },
  {
    id: '2',
    text: 'tagliare erba',
    completed: true
  }
];

@Injectable({ providedIn: 'root' })
export class TodosService {


  getTodos() {
    return of(todos).pipe(
      delay(500)
    );
  }

  addTodo(text: string) {

    const newTodo: Todo = {
      id: '' + Math.random(),
      text,
      completed: false
    };

    // Scrittura su DB
    todos = todos.concat(newTodo);

    return of(newTodo).pipe(
      delay(500)
    );
  }

  removeTodo(id: string) {
    const todo = todos.find(t => t.id === id)!;

    // Scrittura su DB
    todos = todos.filter(t => t.id !== todo.id);

    return of(todo).pipe(
      delay(500)
    );
  }

  toggleTodo(id: string) {

    todos = todos.map(t => {
      if (t.id === id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });

    const todo = todos.find(t => t.id === id)!;

    return of(todo).pipe(
      delay(500)
    );
  }
}

