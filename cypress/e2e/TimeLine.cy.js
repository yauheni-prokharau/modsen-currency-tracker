import { cy } from "local-cypress";

describe("TimeLine Page E2E Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/timeline");
  });

  it("should display all the elements of TimeLine Page", () => {
    cy.get("[data-cy=navbar]").should("be.visible");
    cy.get("[data-cy=header]").should("be.visible");
    cy.get("[data-cy=lastUpdated]").should("be.visible");
    cy.get("[data-cy=currencyChart]").should("be.visible");
    cy.get("[data-cy=footer]").should("be.visible");
  });

  it("should change the chart", () => {
    cy.get("[data-cy=currencyButton]").eq(1).click();
    cy.get("[data-cy=currencyChart]")
      .should("be.visible")
      .should("not.be.empty");
  });
});
