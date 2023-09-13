import React, { Component } from "react";
import { Chart } from "chart.js/auto";

import { currencyData } from "@constants/currency";
import { chartObserver } from "@components";

import {
  CurrencyButton,
  ChartSection,
  ButtonWrapper,
  ButtonImage,
} from "./styled";
import { chartOptions, chartColors } from "./config";

class CurrencyChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.state = {
      selectedCurrencyIndex: 0,
    };
  }

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedCurrencyIndex !== this.state.selectedCurrencyIndex) {
      this.buildChart();
    }
  }

  buildChart() {
    const { selectedCurrencyIndex } = this.state;
    const selectedCurrencyData = currencyData[selectedCurrencyIndex];

    const data = selectedCurrencyData.data;
    const chartData = {
      labels: data.map((item) => item.date),
      datasets: [
        {
          label: selectedCurrencyData.currency,
          data: data.map((item) => item.price),
          backgroundColor: data.map((item, index) => {
            const { transparent, greenBackground, redBackground } = chartColors;

            if (index === 0) {
              return transparent;
            } else {
              const prevPrice = data[index - 1].price;
              const currentPrice = item.price;
              return currentPrice >= prevPrice
                ? greenBackground
                : redBackground;
            }
          }),
          borderWidth: 1,
          barThickness: 10,
        },
      ],
    };

    const ctx = this.chartRef.current.getContext("2d");

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(ctx, {
      type: "bar",
      data: chartData,
      options: chartOptions,
    });

    setTimeout(() => {
      chartObserver.notify();
    }, 100);
  }

  handleCurrencyChange = (index) => {
    this.setState({ selectedCurrencyIndex: index });
  };

  render() {
    return (
      <ChartSection data-cy="currencyChart">
        <ButtonWrapper>
          {currencyData.map((currency, index) => (
            <CurrencyButton
              key={index}
              onClick={() => this.handleCurrencyChange(index)}
              data-cy="currencyButton"
            >
              <ButtonImage
                src={currency.path}
                alt={currency.currency}
                color={currency.color}
              />
              {currency.currency}
            </CurrencyButton>
          ))}
        </ButtonWrapper>
        <canvas ref={this.chartRef} />
      </ChartSection>
    );
  }
}

export default CurrencyChart;
