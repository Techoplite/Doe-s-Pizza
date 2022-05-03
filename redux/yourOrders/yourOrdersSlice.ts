import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderState } from "../order/orderSlice";
import type { RootState } from "../store";

export interface YourOrdersState {
  orders: OrderState[];
}
const initialState: YourOrdersState = {
  orders: [],
};
export const yourOrdersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state: YourOrdersState, action: PayloadAction<OrderState>) => {
      state.orders = [...state.orders, action.payload];
    },
  },
});
export const { addOrder } = yourOrdersSlice.actions;
export const yourOrdersState = (state: RootState) => state.yourOrders;
export default yourOrdersSlice.reducer;
