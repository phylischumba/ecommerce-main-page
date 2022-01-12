import { configureStore } from "@reduxjs/toolkit";
import orders from "./ordersSlice";
export const store = configureStore({
  reducer: { orders },
});
