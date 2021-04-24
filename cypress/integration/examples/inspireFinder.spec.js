context('Inspire Finder', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should have a Header', () => {
    cy.get('[data-cy=home-page]').should('exist')
    .get('[data-cy=header-container]').should('exist')
    .get('[data-cy=header-title]').should('exist')
    // .should('contain', 'Inspire Finder')
  })

  it.only('Should have a Home Page', () => {
    cy.get('[data-cy=header-container]').should('exist')
    .get('[data-cy=select-catagory]').should('exist')
    .get('[data-cy=catagory-hope]').should('exist')
    .get('[data-cy=catagory-leadership]').should('exist')
    .get('[data-cy=catagory-inspirational]').should('exist')
    .get('[data-cy=catagory-laughs]').should('exist')
  })

  it('Should have a Hope Quotes Page', () => {
    cy.get('[data-cy=select-catagory]').should('exist')
    .get('[data-cy=hope-title]').should('exist')
    .should('contain', 'Hope')
    .click()
    .get('[data-cy=card-display-header]').should('exist')
    .should('contain', 'hope Quotes')
    
  })


})
