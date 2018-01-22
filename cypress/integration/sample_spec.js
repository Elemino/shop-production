describe('My first test', function () {
  it('Gets, types and asserts', function () {
    cy.visit('https://earo-shop.herokuapp.com/')

    cy.contains('type').click ()

    cy.url()
    .should('include', '/commands/actions')

    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})
