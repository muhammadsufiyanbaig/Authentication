import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  users: [],
  loggedInUserId: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const existingUser = state.users.find(
        (user) => user.details.email === action.payload.email
      );
      if (!existingUser) {
        const user = {
          id: nanoid(),
          details: action.payload,
        };
        state.users.push(user);
      } else{
        alert("User already exists")
      }
    },
    
    loginUser: (state, action) => {
      state.loggedInUserId = action.payload;
    },

    logoutUser: (state) => {
      state.loggedInUserId = null;
    },
  },
});
export const selectUserArray = (state) => state.user.users;
export const selectLoggedInUserId = (state) => state.user.loggedInUserId;
export const selectLoggedInUser = (state) => {
  const loggedInUserId = state.user.loggedInUserId;
  return state.user.users.find((user) => user.id === loggedInUserId);
};
export const { addUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
