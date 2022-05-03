import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";



export interface BookingState {
  dateTime: string,
  partySize: number,
  firstName: string,
  lastName: string,
  
}
const initialState: BookingState = {
  dateTime: '',
  partySize: 0,
  firstName: '',
  lastName: '',
};
export const bookingSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingState>) => {
      state.dateTime = action.payload.dateTime
      state.partySize = action.payload.partySize
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    } 
  },
});
export const { addBooking } = bookingSlice.actions;
export const bookingState = (state: RootState) => state.booking;
export default bookingSlice.reducer;
