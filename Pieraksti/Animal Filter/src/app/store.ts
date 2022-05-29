import { configureStore } from '@reduxjs/toolkit'
import { animalSlice } from '../store/reducers/animalReducer'

export const store = configureStore({
  reducer: {
    animalSlice: animalSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
