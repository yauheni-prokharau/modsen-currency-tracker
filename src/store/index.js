import { configureStore } from "@reduxjs/toolkit";

import currencyRatesReducer from "./reducers/currencyRatesSlice";

const store = configureStore({
  reducer: {
    currencyRates: currencyRatesReducer,
  },
});

export default store;
