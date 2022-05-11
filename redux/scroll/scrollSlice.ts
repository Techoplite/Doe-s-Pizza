import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderState } from "../order/orderSlice";
import type { RootState } from "../store";

export interface ScrollState {
  preventScroll: boolean;
}

const initialState: ScrollState = { preventScroll: false };
export const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    setPreventScroll: (state: ScrollState, action: PayloadAction<boolean>) => {
      state.preventScroll = action.payload;
    }
  },
});
export const { setPreventScroll } = scrollSlice.actions;
export const yourOrdersState = (state: RootState) => state.scroll;
export default scrollSlice.reducer;
