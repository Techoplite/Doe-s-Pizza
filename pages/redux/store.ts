import { configureStore } from '@reduxjs/toolkit'
import menuSlice from './menu/menuSlice'
import navBackgroundSlice from './navBackground/navBackgroundSlice'
import pizzasSlice from './pizzas/pizzasSlice'
// ...

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    navBackground: navBackgroundSlice,
    pizzas: pizzasSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch