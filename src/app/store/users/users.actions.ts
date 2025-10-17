import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {User} from '../../models/user';

export const usersActions = createActionGroup({
  source: 'Users',
  events: {
    'Users page enter': emptyProps(),
    'Get users success': props<{ users: User[] }>(),
    'User page enter': emptyProps(),
    'Get user success': props<{ user: User }>(),
  },
})
