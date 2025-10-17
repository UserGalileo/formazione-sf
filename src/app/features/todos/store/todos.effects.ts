import {createEffect, Actions, ofType} from '@ngrx/effects';
import {inject} from '@angular/core';
import {TodosService} from '../../../services/todos.service';
import {todosActions} from './todos.actions';
import {catchError, concatMap, exhaustMap, map, tap} from 'rxjs';


export const getTodos = createEffect((
  actions = inject(Actions),
  todosService = inject(TodosService),
) => actions.pipe(
  ofType(todosActions.todosPageEnter),
  exhaustMap(() => todosService.getTodos().pipe(
    map(todos => todosActions.getTodosSuccess({ todos })),
    catchError(() => [todosActions.getTodosFail()])
  )),
), {
  functional: true
});

export const addTodo = createEffect((
  actions = inject(Actions),
  todosService = inject(TodosService),
) => actions.pipe(
  ofType(todosActions.formSubmit),
  concatMap(action => todosService.addTodo(action.text).pipe(
    map(todo => todosActions.addTodoSuccess({ todo }))
  ))
), {
  functional: true
})

export const removeTodo = createEffect((
  actions = inject(Actions),
  todosService = inject(TodosService),
) => actions.pipe(
  ofType(todosActions.removeButtonPressed),
  concatMap(action => todosService.removeTodo(action.id).pipe(
    map(todo => todosActions.removeTodoSuccess({ todo }))
  ))
), {
  functional: true
})

export const toggleTodo = createEffect((
  actions = inject(Actions),
  todosService = inject(TodosService),
) => actions.pipe(
  ofType(todosActions.toggleTodo),
  concatMap(action => todosService.toggleTodo(action.id).pipe(
    map(todo => todosActions.toggleTodoSuccess({ todo }))
  ))
), {
  functional: true
})
