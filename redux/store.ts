import yourOrdersSlice from "./yourOrders/yourOrdersSlice";
import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menu/menuSlice";
import navBackgroundSlice from "./navBackground/navBackgroundSlice";
import pizzasSlice from "./pizzas/pizzasSlice";
import authSlice from "./auth/authSlice";
import orderSlice from "./order/orderSlice";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    navBackground: navBackgroundSlice,
    pizzas: pizzasSlice,
    auth: authSlice,
    order: orderSlice,
    yourOrders: yourOrdersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
