import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { render, screen, fireEvent } from "@testing-library/react";
import { CardHolder } from "@components";

const mockQuotesData = [
  {
    id: 1,
    code: "USD",
    path: "commercialDollar",
    text: "Commercial Dollar",
    color: "rgba(42, 70, 40, 1)",
  },
  {
    id: 2,
    code: "ARS",
    path: "argentinePeso",
    text: "Argentine Peso",
    color: "rgba(90, 75, 44, 1)",
  },
  {
    id: 3,
    code: "CAD",
    path: "canadianDollar",
    text: "Canadian Dollar",
    color: "rgba(69, 37, 52, 1)",
  },
  {
    id: 4,
    code: "JPY",
    text: "Yen",
    color: "rgba(73, 79, 87, 1)",
  },
  {
    id: 5,
    code: "AUD",
    text: "Australian Dollar",
    color: "rgba(20, 46, 103, 1)",
  },
  {
    id: 6,
    code: "CNY",
    text: "Yuan",
    color: "rgba(77, 80, 91, 1)",
  },
  {
    id: 7,
    code: "EUR",
    text: "Euro",
    color: "rgba(29, 50, 75, 1)",
  },
  {
    id: 8,
    code: "BTC",
    text: "Bitcoin",
    color: "rgba(61, 46, 40, 1)",
  },
  {
    id: 9,
    code: "LBP",
    text: "Libra",
    color: "rgba(91, 44, 43, 1)",
  },
];

const mockFetchCurrencyData = jest.fn();
const api = require("@api");

jest.mock(api, () => ({
  fetchCurrencyData: mockFetchCurrencyData,
}));

const mockStore = configureStore([]);

describe("Home page", () => {
  beforeEach(() => {
    mockFetchCurrencyData.mockReset();
  });

  it("renders CardHolder component with loading text", () => {
    const store = mockStore({
      currencyRates: {
        loading: true,
      },
    });

    render(
      <Provider store={store}>
        <CardHolder />
      </Provider>
    );

    const loadingText = screen.getByText("Loading...");
    expect(loadingText).toBeInTheDocument();
  });

  it("renders CardHolder component with stock and quote cards", () => {
    const store = mockStore({
      currencyRates: {
        loading: false,
      },
    });

    const mockResponse = {
      ARS: { code: "ARS", value: 349.9649196701 },
      AUD: { code: "AUD", value: 1.5528401907 },
      BTC: { code: "BTC", value: 0.0000373584 },
      CAD: { code: "CAD", value: 1.3484501433 },
      CNY: { code: "CNY", value: 7.2898113008 },
      EUR: { code: "EUR", value: 0.9350101424 },
      JPY: { code: "JPY", value: 147.5869158402 },
      LBP: { code: "LBP", value: 15008.924434311 },
      USD: { code: "USD", value: 1 },

      meta: {
        last_updated_at: 1632351946,
      },
    };

    mockFetchCurrencyData.mockResolvedValue({ data: mockResponse });

    render(
      <Provider store={store}>
        <CardHolder />
      </Provider>
    );

    const quoteCards = screen.getAllByTestId("quoteCard");

    expect(quoteCards).toHaveLength(mockQuotesData.length);

    const currenciesToFetch = mockQuotesData.map((quote) => quote.code);
    expect(mockFetchCurrencyData).toHaveBeenCalledWith(currenciesToFetch);
  });

  it("opens and closes the modal when a quote card is clicked", () => {
    const store = mockStore({
      currencyRates: {
        loading: false,
      },
    });

    const mockResponse = {
      data: {
        ARS: { code: "ARS", value: 349.9649196701 },
        AUD: { code: "AUD", value: 1.5528401907 },
        BTC: { code: "BTC", value: 0.0000373584 },
        CAD: { code: "CAD", value: 1.3484501433 },
        CNY: { code: "CNY", value: 7.2898113008 },
        EUR: { code: "EUR", value: 0.9350101424 },
        JPY: { code: "JPY", value: 147.5869158402 },
        LBP: { code: "LBP", value: 15008.924434311 },
        USD: { code: "USD", value: 1 },
      },
      meta: {
        last_updated_at: 1632351946,
      },
    };

    mockFetchCurrencyData.mockResolvedValue({ data: mockResponse });

    render(
      <Provider store={store}>
        <CardHolder />
      </Provider>
    );

    const quoteCard = screen.getByTestId("quoteCard");

    const modal = screen.queryByTestId("modal");
    expect(modal).not.toBeInTheDocument();

    fireEvent.click(quoteCard);

    const openedModal = screen.getByTestId("modal");
    expect(openedModal).toBeInTheDocument();

    const closeButton = screen.getByTestId("closeModal");
    fireEvent.click(closeButton);

    const closedModal = screen.queryByTestId("modal");
    expect(closedModal).not.toBeInTheDocument();
  });
});
