import { createAction } from "@reduxjs/toolkit";

export const fetchRatesStart = createAction("currencyRates/fetchRatesStart");
export const fetchRatesSuccess = createAction(
  "currencyRates/fetchRatesSuccess"
);
export const fetchRatesFailure = createAction(
  "currencyRates/fetchRatesFailure"
);
export const setLastUpdated = createAction("currencyRates/setLastUpdated");
