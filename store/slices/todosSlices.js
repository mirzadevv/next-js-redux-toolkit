import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const cloneTodos = state.todos;
      cloneTodos.unshift(action.payload);
      state.todos = cloneTodos;
    },
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
