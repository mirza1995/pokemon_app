import { User } from '@models/User';
import { ACTIONS, UserAction } from './actions';

//Reducer function which can be used in useReducer hook.
//Helps by defining actions around User model.
export const userReducer = (state: Partial<User>, action: UserAction) => {
  switch (action.type) {
    case ACTIONS.INIT:
      return action.data;
    case ACTIONS.UPDATE:
      return {
        ...state,
        ...action.data
      };
    default:
      throw new Error('Invalid user reducer action');
  }
};
