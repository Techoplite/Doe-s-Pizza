import bookingSlice from "./booking/bookingSlice";
import yourOrdersSlice from "./yourOrders/yourOrdersSlice";
import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menu/menuSlice";
import navBackgroundSlice from "./navBackground/navBackgroundSlice";
import pizzasSlice from "./pizzas/pizzasSlice";
import authSlice from "./auth/authSlice";
import orderSlice from "./order/orderSlice";
import scrollSlice from "./scroll/scrollSlice";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    navBackground: navBackgroundSlice,
    pizzas: pizzasSlice,
    auth: authSlice,
    order: orderSlice,
    yourOrders: yourOrdersSlice,
    booking: bookingSlice,
    scroll: scrollSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
