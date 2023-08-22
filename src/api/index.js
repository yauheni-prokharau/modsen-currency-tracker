import axios from "axios";

const apiKey = process.env.API_KEY;
const uri = process.env.CURRENCY_API_URI;
const splitter = process.env.CURRENCY_API_SPLITTER;

export const fetchCurrencyData = async (currencies) => {
  try {
    const response = await axios.get(
      `${uri}apikey=${apiKey}&currencies=${currencies.join(splitter)}`
    );

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
