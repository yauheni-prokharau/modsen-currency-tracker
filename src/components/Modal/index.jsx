import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { ModalOverlay, ModalContent, ModalCloseButton } from "./styled";

const Modal = ({ isOpen, onClose, selectedCurrency, exchangeRates }) => {
  const [targetCurrency, setTargetCurrency] = useState("USD");
  const [convertAmount, setConvertAmount] = useState(null);

  const convertCurrency = () => {
    const selectedRate = exchangeRates[selectedCurrency]?.value;
    const targetRate = exchangeRates[targetCurrency]?.value;
    if (selectedRate && targetRate) {
      return (targetRate / selectedRate).toFixed(5);
    }
    return "N/A";
  };

  const handleCurrencyChange = (event) => {
    setTargetCurrency(event.target.value);
    setConvertAmount(null);
  };

  const handleConvert = () => {
    const convertedValue = convertCurrency();
    setConvertAmount(convertedValue);
  };

  const handleModalOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
      setTargetCurrency("USD");
      setConvertAmount(null);
    }
  };

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalOverlay onClick={handleModalOverlayClick} data-cy="modal">
      <ModalContent>
        <ModalCloseButton
          onClick={handleModalOverlayClick}
          data-cy="closeModal"
        >
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
        {convertAmount !== null && (
          <p>
            Converted value: {convertAmount} {targetCurrency}
          </p>
        )}
      </ModalContent>
    </ModalOverlay>,
    document.getElementById("root")
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedCurrency: PropTypes.string,
  exchangeRates: PropTypes.object.isRequired,
};

export default Modal;
