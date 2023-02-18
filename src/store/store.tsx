import {
  combineReducers,
  configureStore,
  createSelector
} from '@reduxjs/toolkit';
import userSlice from './user-slice';

const rootReducer = combineReducers({ user: userSlice.reducer });
const store = configureStore({
  reducer: rootReducer
});
export type StoreRootState = ReturnType<typeof rootReducer>;

const selectSelf = (state: StoreRootState) => state;

export const userSelector = createSelector(selectSelf, (state) => state.user);

export default store;
