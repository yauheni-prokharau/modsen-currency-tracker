import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card, Modal } from "@components";
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
} from "./styled";

const CardHolder = () => {
  const [fetchedRates, setFetchedRates] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.currencyRates.loading);

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

  const handleOpenModal = (currency) => {
    setSelectedCurrency(currency);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedCurrency(null);
    setIsModalOpen(false);
  };

  return (
    <main>
      <CardHolderContainer data-cy="cardHolder">
        <CardHolderTextWrapper>
          <CardHolderText>Stocks</CardHolderText>
        </CardHolderTextWrapper>
        <CardHolderWrapper>
          {stocksData.map((item) => {
            return <Card key={item.id} {...item} />;
          })}
        </CardHolderWrapper>
        <CardHolderTextWrapper>
          <CardHolderText>Quotes</CardHolderText>
        </CardHolderTextWrapper>
        <CardHolderWrapper>
          {quotesData.map((item) => {
            return (
              <Card
                key={item.id}
                {...item}
                rate={
                  loading
                    ? "Loading..."
                    : `R$ ${fetchedRates[item.code]?.value.toFixed(5)}`
                }
                onClick={() => handleOpenModal(item.code)}
              />
            );
          })}
        </CardHolderWrapper>
      </CardHolderContainer>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedCurrency={selectedCurrency}
        exchangeRates={fetchedRates}
      />
    </main>
  );
};

export default CardHolder;
