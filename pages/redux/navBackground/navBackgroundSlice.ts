import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface NavBackgroundState {
  open: boolean
}
const initialState: NavBackgroundState = {
  open: false
}
export const navBackgroundSlice = createSlice({
  name: 'navBackground',
  initialState,
  reducers: {
    setNavBackground: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload
    }
  }
})
export const { setNavBackground } = navBackgroundSlice.actions
export const navBackgroundState = (state: RootState) => state.menu.open
export default navBackgroundSlice.reducer