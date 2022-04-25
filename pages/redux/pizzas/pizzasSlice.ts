import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface PizzasState {
  open: boolean
}
const initialState: PizzasState = {
  open: false
}
export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzas: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload
    }
  }
})
export const { setPizzas } = pizzasSlice.actions
export const pizzasState = (state: RootState) => state.pizzas
export default pizzasSlice.reducer