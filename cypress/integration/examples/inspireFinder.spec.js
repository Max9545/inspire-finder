/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // https://on.cypress.io/interacting-with-elements

  it.only('Should have a Header', () => {
    // https://on.cypress.io/type
    cy.get('[data-cy=home-page').should('exist')
    .get('[data-cy=header-container').should('exist')
    .get('[data-cy=header-title').should('exist')
    // .should('contain', 'Inspire Finder')
  })

  it('Should have a Home Page', () => {
    // https://on.cypress.io/type
    cy.get('[data-cy=header-container').should('exist')
    .get('[data-cy=select-catagory').should('exist')
    .get('[data-cy=catagory-hope').should('exist')
      
  })

  it('Should have a Hope Quotes Page', () => {
    // https://on.cypress.io/type
    cy.get('[data-cy=header-container').should('exist')
    .get('[data-cy=select-catagory').should('exist')
    .get('[data-cy=catagory-hope').should('exist')
      
  })


})
