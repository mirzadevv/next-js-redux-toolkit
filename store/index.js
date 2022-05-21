import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import todosReducers from "./slices/todosSlices";
import usersReducers from "./slices/usersSlices";

const makeStore = () =>
  configureStore({
    reducer: {
      todos: todosReducers,
      users: usersReducers,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
