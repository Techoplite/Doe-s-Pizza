import { configureStore } from '@reduxjs/toolkit'
import menuSlice from './menu/menuSlice'
import navBackgroundSlice from './navBackground/navBackgroundSlice'
// ...

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    navBackground: navBackgroundSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch