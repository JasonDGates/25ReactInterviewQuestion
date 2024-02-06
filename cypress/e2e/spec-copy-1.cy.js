describe("Accordion Component", () => {
  it("should toggle visibility when clicking on a card", () => {
    cy.visit("localhost:5173"); // Replace with the correct URL where your React app is hosted

    // Click on a card and verify that it toggles visibility
    cy.get(".card").eq(0).click(); // Click the first card
    cy.get(".answer").eq(0).should("be.visible"); // Assert that the answer is visible

    cy.get(".card").eq(0).click(); // Click the first card again
    cy.get(".answer").eq(0).should("not.be.visible"); // Assert that the answer is not visible
  });

  it("should toggle multiVisible when clicking on the 'Multiple Answers' card", () => {
    cy.visit("/"); // Replace with the correct URL where your React app is hosted

    // Click on the 'Multiple Answers' card and verify the text
    cy.get(".card").eq(0).click(); // Click the 'Multiple Answers' card
    cy.get(".card").eq(0).should("contain.text", "Multiple Answers are allowed");

    cy.get(".card").eq(0).click(); // Click the 'Multiple Answers' card again
    cy.get(".card").eq(0).should("contain.text", "Multiple Answers are NOT allowed");
  });
});