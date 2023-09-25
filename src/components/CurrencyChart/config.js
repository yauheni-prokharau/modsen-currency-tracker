export const chartOptions = {
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

export const chartColors = {
  transparent: "rgba(0, 0, 0, 0)",
  greenBackground: "rgba(42, 70, 40, 1)",
  redBackground: "rgba(91, 44, 43, 1)",
  darkGreyBackground: "rgba(137, 137, 137, 1)",
};
