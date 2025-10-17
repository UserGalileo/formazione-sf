import {Actions, createEffect, ofType} from '@ngrx/effects';
import {inject} from '@angular/core';
import {exhaustMap, filter, map, tap} from 'rxjs';
import {UsersService} from '../../services/users.service';
import {usersActions} from './users.actions';
import {Store} from '@ngrx/store';
import {selectRouteParam} from '../router/router.selectors';

export const getUsers = createEffect((
  actions = inject(Actions),
  usersService = inject(UsersService),
) => actions.pipe(
  ofType(usersActions.usersPageEnter),
  exhaustMap(() => usersService.getUsers().pipe(
    map(users => usersActions.getUsersSuccess({ users })),
  )),
), {
  functional: true
});

export const getUser = createEffect((
  actions = inject(Actions),
  usersService = inject(UsersService),
  store = inject(Store)
) => store.select(selectRouteParam('userId')).pipe(
  filter(param => !!param),
  exhaustMap(id => usersService.getUser(id!).pipe(
    map(user => usersActions.getUserSuccess({ user })),
  )),
), {
  functional: true
});

export const logGetUsers = createEffect((
  actions = inject(Actions),
) => actions.pipe(
  ofType(usersActions.getUserSuccess),
  tap(console.log)
), {
  functional: true,
  dispatch: false
});


