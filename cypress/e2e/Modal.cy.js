import { cy } from "local-cypress";

describe("Modal Currency Conversion E2E test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  const currencyData = {
    ARS: "9306136.35756",
    AUD: "41338.95609",
    BTC: "1.00000",
    CAD: "35995.87437",
    CNY: "193548.30164",
    EUR: "24951.42588",
    JPY: "3935818.33589",
    LBP: "399425303.79510",
    USD: "26618.25693",
  };

  it("should open modal for Bitcoin (BTC) and convert BTC to each currency", () => {
    Object.entries(currencyData).forEach(([currency, rate]) => {
      cy.get("[data-cy=cardHolder]").contains("Bitcoin").click();
      cy.get("[data-cy=modal]").should("be.visible");

      cy.get("[data-cy=select]").select(currency);
      cy.get("[data-cy=button]").contains("Convert").click();

      cy.get("[data-cy=p]")
        .contains(`Converted value: ${rate} ${currency}`)
        .should("exist");

      cy.get("[data-cy=closeModal]").click();
    });
  });
});
