import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderState } from "../order/orderSlice";
import type { RootState } from "../store";

export interface YourOrdersState {
  orders: OrderState[];
}

const initialState: YourOrdersState = {
  orders: [
    {
      id: "939dfb64-bf84-41c2-9024-4e94f20357de",
      isCompleted: true,
      items: [
        {
          title: "Bufala e Pomodorini",
          quantity: 1,
          price: 9.99,
        },
      ],
      details: {
        date: "23/02/22",
        lastName: "",
        time: "",
        isDelivery: true,
        address: "",
        postcode: "",
        total: 23.5,
      },
    },
    {
      id: "1d2ef645-1993-4428-9263-03103f2b4e43",
      isCompleted: true,
      items: [
        {
          title: "Diavola",
          quantity: 3,
          price: 8.99,
        },
      ],
      details: {
        date: "03/03/22",
        lastName: "t",
        address: "t",
        postcode: "t",
        isDelivery: true,
        time: "3.30pm",
        total: 25.99,
      },
    },
  ],
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
