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
  },
});

// Action creators are generated for each case reducer function
export const { allOrders } = orderSlice.actions;

export default orderSlice.reducer;
