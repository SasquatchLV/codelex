import { configureStore } from '@reduxjs/toolkit'
import countReducer from '../store/reducers/counterReducer'
import todoReducer from '../store/reducers/todoReducer'

export const store = configureStore({
  reducer: {
    counter: countReducer,
    toDos: todoReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
