import { createSlice } from "@reduxjs/toolkit";

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    cars: [],
  },
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    },
  },
});

export const { setCars } = catalogSlice.actions;
export default catalogSlice.reducer;
