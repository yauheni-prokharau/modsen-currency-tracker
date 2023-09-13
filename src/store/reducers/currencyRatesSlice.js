import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rates: {},
  loading: false,
  error: null,
};

const currencyRatesSlice = createSlice({
  name: "currencyRates",
  initialState,
  reducers: {
    fetchRatesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchRatesSuccess(state, action) {
      state.rates = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchRatesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchRatesStart, fetchRatesSuccess, fetchRatesFailure } =
  currencyRatesSlice.actions;

export default currencyRatesSlice.reducer;
