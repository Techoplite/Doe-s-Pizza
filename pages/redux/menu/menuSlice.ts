import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface MenuState {
  open: boolean
}
const initialState: MenuState = {
  open: false
}
export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggle: state => {state.open = !state.open}
  }
})
export const { toggle } = menuSlice.actions
export const menuState = (state: RootState) => state.menu.open
export default menuSlice.reducer