import { createSlice } from '@reduxjs/toolkit'
import { ShopItem } from '../../Data/shopItems'

export const cartSlice = createSlice({
  name: 'cartItems',
  initialState: {
    cartItems: [] as ShopItem[],
  },
  reducers: {
    addToCart: (state: { cartItems: ShopItem[] }, action: { payload: { item: ShopItem; count: number } }) => {
      const { cartItems } = state
      const { id } = action.payload.item
      const singleItem = cartItems.find((item) => item.id === id)
      if (singleItem) {
        singleItem.count += action.payload.count
      } else {
        state.cartItems = [...state.cartItems, { ...action.payload.item, count: action.payload.count }]
      }
    },
    clearCart: (state: { cartItems: ShopItem[] }) => {
      state.cartItems = []
    },
    changeQuantity: (state: { cartItems: ShopItem[] }, action: { payload: { id: number; count: number } }) => {
      const { cartItems } = state
      const singleItem = cartItems.find((item) => item.id === action.payload.id)
      if (singleItem) {
        if (action.payload.count > 0) {
          singleItem.count = action.payload.count
        } else {
          cartItems.splice(cartItems.indexOf(singleItem), 1)
        }
      }
    },
  },
})

export const {
  addToCart, clearCart, changeQuantity,
} = cartSlice.actions

export default cartSlice.reducer
