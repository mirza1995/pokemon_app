import { User } from '@models/User';
import { UserError } from '@models/UserError';

//Reducer actions
export enum ACTIONS {
  INIT = 'INIT',
  UPDATE = 'UPDATE',
  UPDATE_KEY = 'UPDATE_KEY',
  REMOVE = 'REMOVE'
}

export interface UserErrorAction {
  type: string;
  data: Partial<UserError>;
  errorToRemove?: string;
}

export interface UserAction {
  type: string;
  data: Partial<User>;
}
