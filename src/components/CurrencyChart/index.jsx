import React, { Component } from "react";
import { Chart } from "chart.js/auto";

import { currencyData } from "@constants/currency";
import { chartObserver, ChartNotification } from "@components";

import {
  CurrencyButton,
  ChartSection,
  ButtonWrapper,
  ButtonImage,
  ModalContainer,
  Modal,
} from "./styled";
import { chartOptions, chartColors } from "./config";

class CurrencyChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.state = {
      selectedCurrencyIndex: 0,
      showModal: false,
      userInputData: [],
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
          data: data.map((item, index) => {
            const prevPrice = index === 0 ? item.price : data[index - 1].price;
            const currentPrice = item.price;
            return [prevPrice, currentPrice];
          }),
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
          borderWidth: 2,
          borderColor: chartColors.darkGreyBackground,
          barThickness: 20,
        },
      ],
    };

    const ctx = this.chartRef.current.getContext("2d");

    if (this.chart) {
      this.chart.destroy();
    }

    const candlestick = {
      id: "candlestick",
      beforeDatasetsDraw(chart) {
        const {
          ctx,
          data,
          scales: { x, y },
        } = chart;

        ctx.save();
        ctx.lineWidth = 4;
        ctx.strokeStyle = chartColors.darkGreyBackground;

        data.datasets[0].data.map((item, index) => {
          const h = item[1] + item[1] * 0.05;
          const l = item[0] - item[0] * 0.05;

          ctx.beginPath();
          ctx.moveTo(
            chart.getDatasetMeta(0).data[index].x,
            chart.getDatasetMeta(0).data[index].y
          );
          ctx.lineTo(
            chart.getDatasetMeta(0).data[index].x,
            y.getPixelForValue(h)
          );
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(
            chart.getDatasetMeta(0).data[index].x,
            chart.getDatasetMeta(0).data[index].y
          );
          ctx.lineTo(
            chart.getDatasetMeta(0).data[index].x,
            y.getPixelForValue(l)
          );
          ctx.stroke();
        });
      },
    };

    this.chart = new Chart(ctx, {
      type: "bar",
      data: chartData,
      options: chartOptions,
      plugins: [candlestick],
    });

    setTimeout(() => {
      chartObserver.notify();
    }, 100);
  }

  handleCurrencyChange = (index) => {
    this.setState({ selectedCurrencyIndex: index });
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  handleUserInput = (event) => {
    const { name, value } = event.target;
    const { userInputData } = this.state;
    const newData = [...userInputData];

    newData[parseInt(name)] = parseFloat(value);

    this.setState({ userInputData: newData });
  };

  updateChartWithUserInput = () => {
    const { userInputData } = this.state;
    const selectedCurrencyData = currencyData[this.state.selectedCurrencyIndex];

    const formattedData = userInputData.map((value, index) => {
      const prevPrice = userInputData[index - 1]
        ? userInputData[index - 1]
        : selectedCurrencyData.data[0].price;

      return [prevPrice, value];
    });

    const chartData = this.chart.data.datasets[0];
    chartData.data = formattedData;

    this.chart.update();
    this.closeModal();

    chartObserver.notify();

    this.setState({ userInputData: [] });
  };

  render() {
    const { showModal, userInputData } = this.state;

    return (
      <ChartSection data-cy="currencyChart" data-testid="currencyChart">
        <ChartNotification />
        <ButtonWrapper>
          {currencyData.map((currency, index) => (
            <CurrencyButton
              key={index}
              onClick={this.handleCurrencyChange.bind(this, index)}
              data-cy="currencyButton"
              data-testid="currencyButton"
            >
              <ButtonImage
                src={currency.path}
                alt={currency.currency}
                color={currency.color}
              />
              {currency.currency}
            </CurrencyButton>
          ))}
          <CurrencyButton onClick={this.openModal}>
            <span>🆕</span> Update Chart
          </CurrencyButton>
        </ButtonWrapper>
        <canvas ref={this.chartRef} />

        {showModal && (
          <ModalContainer>
            <Modal>
              <h2>Enter 30 Prices</h2>
              {Array.from({ length: 30 }, (_, index) => (
                <input
                  key={index}
                  type="number"
                  name={index}
                  value={userInputData[index] || ""}
                  onChange={this.handleUserInput}
                  placeholder={`Price for Day ${index + 1}`}
                />
              ))}
              <button onClick={this.updateChartWithUserInput}>Update</button>
              <button onClick={this.closeModal}>Close ❌</button>
            </Modal>
          </ModalContainer>
        )}
      </ChartSection>
    );
  }
}

export default CurrencyChart;
