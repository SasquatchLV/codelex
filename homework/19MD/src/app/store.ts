import { configureStore } from '@reduxjs/toolkit'
import countReducer from '../store/reducers/counterReducer'
import todoReducer from '../store/reducers/todoReducer'
import cartReducer from '../store/reducers/cartReducer'

export const store = configureStore({
  reducer: {
    counter: countReducer,
    toDos: todoReducer,
    cartItems: cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
