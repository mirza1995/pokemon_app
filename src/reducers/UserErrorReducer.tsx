import { UserError } from '@models/UserError';
import { ACTIONS, UserErrorAction } from './actions';

//Reducer function which can be used in useReducer hook.
//Helps by defining actions around UserError model.
export const userErrorReducer = (
  state: Partial<UserError>,
  action: UserErrorAction
) => {
  switch (action.type) {
    case ACTIONS.INIT:
      return action.data;
    case ACTIONS.REMOVE:
      return {
        ...Object.keys(state).reduce(
          (acc, key) =>
            key !== action.errorToRemove
              ? { ...acc, [key]: state[key as keyof UserError] }
              : acc,
          {}
        )
      };
    default:
      throw new Error('Invalid user error action');
  }
};
