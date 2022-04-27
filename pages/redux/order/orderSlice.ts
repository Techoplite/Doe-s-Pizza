import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface OrderState {
  items: {}
}
const initialState: OrderState = {
  items: {}
}
export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<OrderState>) => {
      state.items = action.payload.items
      }
  }
})
export const { setOrder } = orderSlice.actions
export const orderState = (state: RootState) => state.order
export default orderSlice.reducer