import { configureStore } from "@reduxjs/toolkit";

import currencyRatesReducer from "./reducers/currencyRatesSlice";
import themeReducer from "./reducers/themeSlice";

const store = configureStore({
  reducer: {
    currencyRates: currencyRatesReducer,
    theme: themeReducer,
  },
});

export default store;
