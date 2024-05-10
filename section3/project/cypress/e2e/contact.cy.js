/// <reference types="Cypress" />

describe("contact form", () => {
	it("should submit the form", () => {
		cy.visit("http://127.0.0.1:5173/about");
		cy.get('[data-cy="contact-input-message"]').type("this is a message");
		cy.get('[data-cy="contact-input-name"]').type("John Doe");
		cy.get('[data-cy="contact-input-email"]').type("email@gmail.com");
		cy.get('[data-cy="contact-btn-submit"]').contains("Send Message");
		cy.get('[data-cy="contact-btn-submit"]').should(
			"not.have.attr",
			"disabled"
		);
		cy.get('[data-cy="contact-btn-submit"]').click();
		cy.get('[data-cy="contact-btn-submit"]').contains("Sending...");
		cy.get('[data-cy="contact-btn-submit"]').should(
			"have.attr",
			"disabled"
		);
	});
});
