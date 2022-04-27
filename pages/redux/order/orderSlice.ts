import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface OrderItem {
  title: string;
  quantity: number;
}

export interface OrderState {
  items: OrderItem[];
}
const initialState: OrderState = {
  items: [],
};
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      if (state.items.length === 0) {
        // If the array of items is empty initialize the array only with the item from payload
        state.items = [
          {
            title: action.payload,
            quantity: 1,
          },
        ];
      } else {
        let exists = false;
        state.items.map((item) => {
          if (item.title === action.payload) {
            // If the item is already in the array increase quantity
            item.quantity += 1;
            exists = true;
          }
        });
        // Otherwise add item to the already populated array of items
        !exists &&
          (state.items = [
            ...state.items,
            {
              title: action.payload,
              quantity: 1,
            },
          ]);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items.map((item) => {
        if (item.title === action.payload) {
          if (item.quantity > 1) {
            item.quantity -= 1;
          } else {
            // If quantity is 1 remove item from array
            state.items = state.items.filter(
              (item) => item.title !== action.payload
            );
          }
        }
      });
    },
  },
});
export const { addItem } = orderSlice.actions;
export const { removeItem } = orderSlice.actions;
export const orderState = (state: RootState) => state.order;
export default orderSlice.reducer;
