import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import dayjs from "dayjs";

export interface BookingState {
  dateTime: string;
  partySize: number;
  firstName: string;
  lastName: string;
  contactNumber: string;
}
const initialState: BookingState = {
  dateTime: "",
  partySize: 0,
  firstName: "",
  lastName: "",
  contactNumber: "",
};
export const bookingSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingState>) => {
      state.dateTime = dayjs(action.payload.dateTime).format('DD/MM/YY');
      state.partySize = action.payload.partySize;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.contactNumber = action.payload.contactNumber;
    },
  },
});
export const { addBooking } = bookingSlice.actions;
export const bookingState = (state: RootState) => state.booking;
export default bookingSlice.reducer;
