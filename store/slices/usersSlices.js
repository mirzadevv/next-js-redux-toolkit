import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loadUsers: (state, action) => {
      let cloneUsers = state.users;
      cloneUsers = action.payload;
      state.users = cloneUsers;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (!action.payload) {
        return state;
      }
      let cloneUsers = state.users;
      cloneUsers = action.payload;
      state.users = cloneUsers;
    },
  },
});

export const { loadUsers } = usersSlice.actions;
export default usersSlice.reducer;
