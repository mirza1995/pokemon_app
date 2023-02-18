import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSlice } from '@models/UserSlice';

const initialState: UserSlice = {
  user: null,
  authToken: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    init(state: UserSlice, action: PayloadAction<UserSlice>) {
      state.user = action.payload.user;
      state.authToken = action.payload.authToken;
    },
    reset(state: UserSlice) {
      state.user = initialState.user;
      state.authToken = initialState.authToken;
    }
  }
});

export const userActions = userSlice.actions;

export default userSlice;
