/// <reference types="Cypress" />

describe("pge navigation", () => {
	it("should navigate between pages", () => {
		cy.visit("http://127.0.0.1:5173/");
		//to get element by attribute you must use []
		cy.get("[data-cy='header-about-link']").click();
		//data-cy attributes for getting elements, they are custom cypress attributes
		cy.location("pathname").should("eq", "/about");

		cy.go("back");
		cy.location("pathname").should("eq", "/");
		cy.get("[data-cy='header-about-link']").click();
		cy.get("[data-cy='header-home-link']").click();
		cy.location("pathname").should("eq", "/");
	});
});
