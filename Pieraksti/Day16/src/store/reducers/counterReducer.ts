import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    name: 'Jānis',
    rating: 0,
  },
  reducers: {
    increment: (state: { value: number }) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state: { value: number }) => {
      state.value -= 1
    },
    incrementByAmount: (state: { value: number }, action: { payload: number }) => {
      state.value += action.payload
    },
    divideByTwo: (state: {value: number }) => {
      state.value /= 2
    },
    multiplyBySeven: (state: {value: number }) => {
      state.value *= 7
    },
    resetToZero: (state: {value: number }) => {
      state.value = 0
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  increment, decrement, incrementByAmount, divideByTwo, multiplyBySeven, resetToZero,
} = counterSlice.actions

export default counterSlice.reducer
