describe('The website', () => {
  it('is accessible', () => {
    cy.visit('');
    cy.contains('Welcome to Chai's Cool Website').click();
  })
})
