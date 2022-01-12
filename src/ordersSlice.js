import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalOrders: [],
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    allOrders: (state, { payload }) => {
      const item = state.totalOrders.find(
        (shoe) => shoe.imageUrl === payload.imageUrl
      );

      if (item) {
        item.counter = payload.counter;
      } else {
        state.totalOrders.push(payload);
      }
    },
    removeOrderItem: (state, { payload }) => {
      const newOrders = state.totalOrders.filter(
        (item) => item.id !== payload.id
      );
      return { ...state, totalOrders: newOrders };
    },
  },
});

export const { allOrders, removeOrderItem } = orderSlice.actions;

export default orderSlice.reducer;
