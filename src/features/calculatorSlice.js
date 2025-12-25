import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    display: "0",
  },
  reducers: {
    input: (state, action) => {
      state.display =
        state.display === "0" ? action.payload : state.display + action.payload;
    },
    clear: (state) => {
      state.display = "0";
    },
    calculate: (state) => {
      try {
        // learning purpose only
        state.display = String(eval(state.display));
      } catch {
        state.display = "Error";
      }
    },
  },
});

export const { input, clear, calculate } = calculatorSlice.actions;
export default calculatorSlice.reducer;
