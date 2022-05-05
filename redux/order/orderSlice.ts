import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { v4 as uuidv4 } from "uuid";
import dayjs from 'dayjs';

interface OrderDetails {
  lastName: string;
  time: string;
  date: string
  isDelivery: boolean;
  address: string;
  postcode: string;
  total: number
}

interface OrderItem {
  title: string;
  quantity: number;
  price: number;
}

export interface OrderState {
  id: string;
  items: OrderItem[];
  isCompleted: boolean
  details: OrderDetails;
}
const initialState: OrderState = {
  id: uuidv4(),
  items: [],
  isCompleted: false,
  details: {
    lastName: "",
    time: "",
    date: dayjs().format('DD/MM/YY'),
    isDelivery: true,
    address: "",
    postcode: "",
    total: 0
  },
};
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addItem: (
      state,
      action: PayloadAction<{ title: string; price: number }>
    ) => {
      if (state.items.length === 0) {
        // If the array of items is empty initialize the array only with the item from payload
        state.items = [
          {
            title: action.payload.title,
            quantity: 1,
            price: action.payload.price,
          },
        ];
      } else {
        let exists = false;
        state.items.map((item) => {
          if (item.title === action.payload.title) {
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
              title: action.payload.title,
              quantity: 1,
              price: action.payload.price,
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
    setDetails: (state, action: PayloadAction<OrderDetails>) => {
      state.details = action.payload;
    },
  },
});
export const { addItem } = orderSlice.actions;
export const { removeItem } = orderSlice.actions;
export const { setDetails } = orderSlice.actions;
export const orderState = (state: RootState) => state.order;
export default orderSlice.reducer;
