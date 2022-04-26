import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface AuthState {
  isAuthenticated: boolean
}
const initialState: AuthState = {
    isAuthenticated: false
}
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
      setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
          state.isAuthenticated = action.payload
      }
  }
})
export const { setIsAuthenticated } = authSlice.actions
export const authState = (state: RootState) => state.auth.isAuthenticated
export default authSlice.reducer