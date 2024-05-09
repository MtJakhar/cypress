/// <reference types="Cypress" />

describe("template spec", () => {
	it("it should render the main image", () => {
		//cy is an object, which is globally available in the cypress testing files.
		cy.visit("http://127.0.0.1:5173/");
		//visit is a method of the cy object. visit- takes you the the page entered into it, and it fails the test if the page does not exist
		cy.get(".main-header img");
		/*
		top is correct, bottom is incorrect
		the chaining of get will instead make to separate
		 cy.get(".main-header").get("img");
    the following will work
    cy.get(".main-header").find("img");
    */

		//get method -Get one or more DOM elements by node name: input, button, etc.
	});

	it("should display the page title", () => {
		cy.visit("http://127.0.0.1:5173/");
		cy.get("h1").should("have.length", 1);
		cy.get("h1").contains("React Tasks");
	});
});
