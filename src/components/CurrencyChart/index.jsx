import React, { Component } from "react";
import { Chart } from "chart.js/auto";

import { currencyData } from "@constants";

import {
  CurrencyButton,
  ChartSection,
  ButtonWrapper,
  ButtonImage,
} from "./styled";

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

  componentDidUpdate() {
    this.buildChart();
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
            if (index === 0) {
              return "rgba(0, 0, 0, 0)";
            } else {
              const prevPrice = data[index - 1].price;
              const currentPrice = item.price;
              return currentPrice >= prevPrice
                ? "rgba(42, 70, 40, 1)"
                : "rgba(91, 44, 43, 1)";
            }
          }),
          borderWidth: 1,
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      scales: {
        x: {
          grid: {
            color: "rgba(137, 137, 137, 1)",
            borderWidth: 1,
          },
          ticks: {
            autoSkip: true,
            maxTicksLimit: 10,
          },
          scaleLabel: {
            display: true,
            labelString: "Day",
          },
        },
        y: {
          grid: {
            color: "rgba(137, 137, 137, 1)",
            borderWidth: 1,
          },
          beginAtZero: true,
          scaleLabel: {
            display: true,
            labelString: "USD value",
          },
        },
      },
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
  }

  handleCurrencyChange(index) {
    this.setState({ selectedCurrencyIndex: index });
  }

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
