import { cy } from "local-cypress";

describe("Home Page E2E Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display all the elements of Home Page", () => {
    cy.get("[data-cy=navbar]").should("be.visible");
    cy.get("[data-cy=header]").should("be.visible");
    cy.get("[data-cy=lastUpdated]").should("be.visible");
    cy.get("[data-cy=cardHolder]").should("be.visible");
    cy.get("[data-cy=footer]").should("be.visible");
  });

  it("should open and close modal on card click", () => {
    cy.get("[data-cy=card]").should("be.visible");
    cy.get("[data-cy=card]").eq(2).click();
    cy.get("[data-cy=modal]").should("be.visible");
    cy.get("[data-cy=closeModal]").click();
  });
});
