import { cy } from "local-cypress";

describe("BankCard Page E2E Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/bankcard");
  });

  it("should display all the elements of Home Page", () => {
    cy.get("[data-cy=navbar]").should("be.visible");
    cy.get("[data-cy=header]").should("be.visible");
    cy.get("[data-cy=lastUpdated]").should("be.visible");
    cy.get("[data-cy=mapBoxMap]").should("be.visible");
    cy.get("[data-cy=footer]").should("be.visible");
  });

  it("should interact correctly with input", () => {
    const targetValue = "Bt";

    cy.get("[data-cy=targetCurrency]").should("be.visible");
    cy.get("[data-cy=targetCurrency]")
      .type(targetValue)
      .should("have.value", targetValue);
  });

  it("should display the marker when clicking the target value", () => {
    const targetValue = "usd";

    cy.get("[data-cy=targetCurrency]").should("be.visible");
    cy.get("[data-cy=targetCurrency]")
      .type(targetValue)
      .should("have.value", targetValue);
    cy.get("[data-cy=targetCurrencyItem]").click();
    cy.get("[data-cy=marker]").should("be.visible");
  });
});
