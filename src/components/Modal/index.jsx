import React, { useState } from "react";
import ReactDOM from "react-dom";

import { ModalOverlay, ModalContent, ModalCloseButton } from "./styled";

const Modal = ({ isOpen, onClose, selectedCurrency, exchangeRates }) => {
  const [targetCurrency, setTargetCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleCurrencyChange = (event) => {
    setTargetCurrency(event.target.value);
    setConvertedAmount(null);
  };

  const convertCurrency = () => {
    const selectedRate = exchangeRates[selectedCurrency]?.value;
    const targetRate = exchangeRates[targetCurrency]?.value;
    if (selectedRate && targetRate) {
      return (targetRate / selectedRate).toFixed(5);
    }
    return "N/A";
  };

  const handleConvert = () => {
    const convertedValue = convertCurrency();
    setConvertedAmount(convertedValue);
  };

  const handleModalOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalOverlay onClick={handleModalOverlayClick} data-cy="modal">
      <ModalContent>
        <ModalCloseButton onClick={onClose} data-cy="closeModal">
          Close ❌
        </ModalCloseButton>
        <h2>Currency Converter 💱</h2>
        <p>From: {selectedCurrency}</p>
        <select value={targetCurrency} onChange={handleCurrencyChange}>
          {Object.keys(exchangeRates).map((currencyCode) => (
            <option key={currencyCode} value={currencyCode}>
              {currencyCode}
            </option>
          ))}
        </select>
        <button onClick={handleConvert}>Convert</button>
        {convertedAmount !== null && (
          <p>
            Converted value: {convertedAmount} {targetCurrency}
          </p>
        )}
      </ModalContent>
    </ModalOverlay>,
    document.getElementById("root")
  );
};

export default Modal;
