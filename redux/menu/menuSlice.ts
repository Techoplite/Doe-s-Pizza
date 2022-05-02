import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface MenuState {
  open: boolean
  section: string | null
}
const initialState: MenuState = {
  open: false,
  section: 'landing'
}
export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<MenuState>) => {
      state.open = !state.open
      state.section = action.payload ? action.payload.section : null
    }
  }
})
export const { toggle } = menuSlice.actions
export const menuState = (state: RootState) => state.menu.open
export default menuSlice.reducer