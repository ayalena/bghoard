describe('review', () => {
  beforeEach(() => cy.visit('/'));
  it('should display the welcome message', () => {
    cy.contains('Board Game Hoard: Review');
  });
});
