import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface Pizza {
  title: string;
}
interface Data {
  nodes: Pizza[] | [];
}

export interface PizzasState {
  data: Data;
}
const initialState: PizzasState = {
  data: { nodes: [] } as Data,
};
export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setPizzas: (state: PizzasState, action: PayloadAction<Data>) => {
      state.data = action.payload;
    },
  },
});
export const { setPizzas } = pizzasSlice.actions;
export const pizzasState = (state: RootState) => state.pizzas;
export default pizzasSlice.reducer;
