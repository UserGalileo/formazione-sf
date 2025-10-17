import {User} from '../../models/user';
import {createFeature, createReducer, on} from '@ngrx/store';
import {usersActions} from './users.actions';


export interface UsersState {
  list: User[];
  currentUser: User | null;
}

const initialState: UsersState = {
  list: [],
  currentUser: null
}

export const usersFeature = createFeature({
  name: 'users',
  reducer: createReducer(
    initialState,
    on(usersActions.getUsersSuccess, (state, action) => ({ ...state, list: action.users })),
    on(usersActions.getUserSuccess, (state, action) => ({ ...state, currentUser: action.user })),
  )
});
