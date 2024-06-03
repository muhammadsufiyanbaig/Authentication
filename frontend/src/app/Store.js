import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './features/user/UserSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export const selectLoggedInUser = (state) => {
  const loggedInUserId = state.user.loggedInUserId;
  return state.user.users.find((user) => user.id === loggedInUserId);
};
