import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface AuthState {
  isAuthenticated: boolean,
  credentials: {
    username: string,
    password: string
  }
}
const initialState: AuthState = {
  isAuthenticated: false,
  credentials: {
    username: '',
    password: ''
  }
}
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<AuthState>) => {
      state.isAuthenticated = action.payload.isAuthenticated
      state.credentials = action.payload.credentials
      }
  }
})
export const { setIsAuthenticated } = authSlice.actions
export const authState = (state: RootState) => state.auth
export default authSlice.reducer