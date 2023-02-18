import { CurrentUser } from './CurrentUser';

export interface UserSlice {
  user: CurrentUser | null;
  authToken: string;
}
