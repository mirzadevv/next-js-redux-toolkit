import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import todosReducers from "./slices/todosSlices";

const makeStore = () =>
  configureStore({
    reducer: {
      todos: todosReducers,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
