import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [] as string[],
  },
  reducers: {
    addTodo: (state: { todos: string[] }, { payload }: { payload: string }) => {
      state.todos = [...state.todos, payload]
    },
    removeTodo: (state: { todos: string[] }, { payload }: { payload: number }) => {
      // state.todos.splice(payload, 1)
      state.todos = state.todos.filter((_, index) => index !== payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  addTodo, removeTodo,
} = todoSlice.actions

export default todoSlice.reducer
