import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "@components";
import { stocksData, quotesData } from "@constants";
import { fetchCurrencyData } from "@api";
import {
  fetchRatesStart,
  fetchRatesSuccess,
  fetchRatesFailure,
  setLastUpdated,
} from "@store/actions/currencyRatesActions";

import {
  CardHolderContainer,
  CardHolderWrapper,
  CardHolderTextWrapper,
  CardHolderText,
  CardHolderStrip,
} from "./styled";

const CardHolder = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.currencyRates.loading);

  const [fetchedRates, setFetchedRates] = useState({});

  const currencyRatesCache = "currencyRatesCache";
  const expirationTime = 6 * 60 * 60 * 1000;

  useEffect(() => {
    const cachedData = JSON.parse(localStorage.getItem(currencyRatesCache));
    const isCacheValid =
      cachedData &&
      cachedData.timestamp + expirationTime > new Date().getTime();

    dispatch(fetchRatesStart());

    const fetchRates = async () => {
      try {
        const currenciesToFetch = quotesData.map((quote) => quote.code);
        const response = await fetchCurrencyData(currenciesToFetch);

        dispatch(fetchRatesSuccess(response.data));
        dispatch(setLastUpdated(response.meta.last_updated_at));
        setFetchedRates(response.data);

        localStorage.setItem(
          currencyRatesCache,
          JSON.stringify({
            timestamp: new Date().getTime(),
            data: response.data,
          })
        );
      } catch (error) {
        dispatch(fetchRatesFailure(error.message));
      }
    };

    if (isCacheValid) {
      dispatch(fetchRatesSuccess(cachedData.data));
      setFetchedRates(cachedData.data);
    } else {
      fetchRates();
    }
  }, []);

  return (
    <main>
      <CardHolderContainer>
        <CardHolderTextWrapper>
          <CardHolderText>Stocks</CardHolderText>
          <CardHolderStrip />
        </CardHolderTextWrapper>
        <CardHolderWrapper>
          {stocksData.map((item) => {
            const { id, path, text, color, rate } = item;
            return (
              <Card
                key={id}
                path={path}
                text={text}
                color={color}
                rate={rate}
              />
            );
          })}
        </CardHolderWrapper>
        <CardHolderTextWrapper>
          <CardHolderText>Quotes</CardHolderText>
          <CardHolderStrip />
        </CardHolderTextWrapper>
        <CardHolderWrapper>
          {quotesData.map((item) => {
            const { id, path, text, color, code } = item;
            return (
              <Card
                key={id}
                path={path}
                text={text}
                color={color}
                rate={
                  loading
                    ? "Loading..."
                    : `R$ ${fetchedRates[code]?.value.toFixed(5)}`
                }
              />
            );
          })}
        </CardHolderWrapper>
      </CardHolderContainer>
    </main>
  );
};

export default CardHolder;
