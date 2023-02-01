import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
  name: "test",
  initialState: {
    countTwo: 0,
  },
  reducers: {
    incrementByTwo: (state) => {
      state.countTwo += 2;
    },
  },
});

export const { incrementByTwo } = testSlice.actions;

export default testSlice.reducer;
