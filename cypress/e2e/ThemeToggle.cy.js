import { cy } from "local-cypress";

describe("Theme Toggle E2E Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should start with the dark theme", () => {
    cy.get("[data-cy=navbar]")
      .should("have.css", "background-color")
      .and("eq", "rgb(3, 3, 4)");
    cy.get("[data-cy=navbar]")
      .should("have.css", "color")
      .and("eq", "rgb(255, 255, 255)");
  });

  it("should change to the light theme after clicking the toggle", () => {
    cy.get("[data-cy=toggleTheme]").click();
    cy.get("[data-cy=navbar]")
      .should("have.css", "background-color")
      .and("eq", "rgb(255, 255, 255)");
    cy.get("[data-cy=navbar]")
      .should("have.css", "color")
      .and("eq", "rgb(255, 255, 255)");
  });

  it("should switch back to the dark theme after clicking the toggle again", () => {
    cy.get("[data-cy=toggleTheme]").click();
    cy.get("[data-cy=toggleTheme]").click();
    cy.get("[data-cy=navbar]")
      .should("have.css", "background-color")
      .and("eq", "rgb(3, 3, 4)");
    cy.get("[data-cy=navbar]")
      .should("have.css", "color")
      .and("eq", "rgb(255, 255, 255)");
  });
});
