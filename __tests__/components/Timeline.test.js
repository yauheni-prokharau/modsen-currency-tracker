import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import { CurrencyChart } from "@components";

describe("Timeline Page", () => {
  it("renders without errors", () => {
    render(<CurrencyChart />);
    const currencyChartElement = screen.getByTestId("currencyChart");
    expect(currencyChartElement).toBeInTheDocument();
  });

  it("changes selected currency when a button is clicked", () => {
    render(<CurrencyChart />);
    const currencyButton = screen.getByTestId("currencyButton");

    fireEvent.click(currencyButton);

    const updatedCurrencyChartElement = screen.getByTestId("currencyChart");
    expect(updatedCurrencyChartElement).toBeInTheDocument();
  });

  it("opens and closes the modal", () => {
    render(<CurrencyChart />);
    const openModalButton = screen.getByText("🆕 Update Chart");

    fireEvent.click(openModalButton);
    const modal = screen.getByText("Enter 30 Prices");
    expect(modal).toBeInTheDocument();

    const closeModalButton = screen.getByText("Close ❌");
    fireEvent.click(closeModalButton);
    expect(modal).not.toBeInTheDocument();
  });
});
