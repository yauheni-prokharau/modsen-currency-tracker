import React from "react";

import { render, fireEvent } from "@testing-library/react";
import { MapBoxMap } from "@components";

jest.mock("mapbox-gl", () => ({
  Map: class {
    remove() {}
    setLngLat() {
      return this;
    }
    setPopup() {
      return this;
    }
    addTo() {}
  },
  accessToken:
    "pk.eyJ1IjoieWF1aGVuaS1wcm9raGFyYXUiLCJhIjoiY2xscWRsdWU4MGlnMTNmbDBlN2FrazA3dSJ9.cTk-xtFwAglHAwzr0b-6tA",
}));

describe("BankCard page", () => {
  it("renders without crashing", () => {
    render(<MapBoxMap />);
  });

  it("handles search input changes", () => {
    const { getByPlaceholderText } = render(<MapBoxMap />);
    const input = getByPlaceholderText("Currency search...");

    fireEvent.change(input, { target: { value: "USD" } });

    expect(input.value).toBe("USD");
  });

  it('displays "Not Found" when no search results', () => {
    const { getByPlaceholderText, getByText } = render(<MapBoxMap />);
    const input = getByPlaceholderText("Currency search...");

    fireEvent.change(input, { target: { value: "XYZ" } });

    const notFoundText = getByText("Not Found");
    expect(notFoundText).toBeInTheDocument();
  });

  it("creates markers on currency search", () => {
    const { getByPlaceholderText, getByText, getAllByTestId } = render(
      <MapBoxMap />
    );
    const input = getByPlaceholderText("Currency search...");

    fireEvent.change(input, { target: { value: "USD" } });

    const usdOption = getByText("Commercial Dollar (USD)");
    fireEvent.click(usdOption);

    const markers = getAllByTestId("marker");
    expect(markers.length).toBe(6);
  });
});
