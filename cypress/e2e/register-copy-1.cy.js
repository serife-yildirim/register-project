import { errorMessages } from "../../src/components/Register";

describe("Register Page", () => {
  describe("Error Messages", () => {
    it("name input throws error for 2 chars", () => {
      //Arrange
      cy.visit("http://localhost:5173/");
      //Act
      cy.get('[data-cy="ad-input"]').type("se");
      
      //assert
      cy.contains(errorMessages.ad);
    });

    it("Surname input throws error for 2 chars", () => {
      //Arrange
      cy.visit("http://localhost:5173/");
      //Act
      cy.get('[data-cy="soyad-input"]').type("şa");
      //assert
      cy.contains(errorMessages.soyad);
    });
    it("Email input throws error for serife@wit.", () => {
      //Arrange
      cy.visit("http://localhost:5173/");
      //Act
      cy.get('[data-cy="email-input"]').type("serife@wit.");
      //assert
      cy.contains(errorMessages.email);
    });
    it("Password input throws error for 1234", () => {
      //Arrange
      cy.visit("http://localhost:5173/");
      //Act
      cy.get('[data-cy="password-input"]').type("1234");
      //assert
      cy.contains(errorMessages.password);
    });
    it("button is disabled for unvalidated inputs", () => {
      //Arrange
      cy.visit("http://localhost:5173/");
      //Act
      cy.get('[data-cy="password-input"]').type("1234");
      //assert
      cy.get('[data-cy="submit-button"]').should("be.disabled");
    });
  });
  describe("Form inputs validated", () => {
    it("button enabled for validated inputs", () => {
      //Arrange
      cy.visit("http://localhost:5173/");
      //Act
      cy.get('[data-cy="ad-input"]').type("Serife");
      cy.get('[data-cy="soyad-input"]').type("Yıldırım");
      cy.get('[data-cy="email-input"]').type("serife@wit.com.tr");
      cy.get('[data-cy="password-input"]').type("1234Ee-.");

      //assert
      cy.get('[data-cy="submit-button"]').should('be.disabled');
    });
    
  });
});