describe('Login', () => {
  beforeEach(() => {
    cy.visit('login')
  })

  it('Shuld load with correct initial state', () => {
    cy.getByTestId('email-status').should('have.attr', 'title', 'Campo obrigatório')
  })
})
