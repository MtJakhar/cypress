/// <reference types="Cypress" />

describe("contact form", () => {
	it("should submit the form", () => {
		cy.visit("http://127.0.0.1:5173/about");
		cy.get('[data-cy="contact-input-message"]').type("this is a message");
		cy.get('[data-cy="contact-input-name"]').type("John Doe");
		cy.get('[data-cy="contact-input-email"]').type("email@gmail.com");
		cy.get('[data-cy="contact-btn-submit"]').as("submitBtn");
		cy.get("@submitBtn").then((element) => {
			expect(element.attr("disabled")).to.be.undefined;
			expect(el.text()).to.equal("Send Message");
		});
		// cy.get("@submitBtn")
		// 	.contains("Send Message")
		// 	.should("not.have.attr", "disabled");
		cy.get("@submitBtn").click();
		cy.get("@submitBtn")
			.contains("Sending...")
			.should("have.attr", "disabled");
	});

	it("should validate the form input", () => {
		cy.visit("http://127.0.0.1:5173/about");
		cy.get('[data-cy="contact-btn-submit"]').as("@submitBtn");
		cy.get("@submitBtn").click();
		cy.get("@submitBtn").should("not.have.attr", "disabled");
	});
});
