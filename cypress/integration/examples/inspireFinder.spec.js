context('Inspire Finder', () => {
  beforeEach(() => {
    cy
    // .intercept('https://favqs.com/api/quotes/?filter=hope&type=tag', { fixtures: 'hopeQuotes.json'})
    .visit('http://localhost:3000')
  })

  it('Should have a Header', () => {
    cy.get('[data-cy=home-page]').should('exist')
    .get('[data-cy=header-container]').should('exist')
    .get('[data-cy=header-title]').should('exist')
    // .should('contain', 'Inspire Finder')
  })

  it('Should have a Home Page', () => {
    cy.get('[data-cy=header-container]').should('exist')
    .get('[data-cy=select-catagory]').should('exist')
    .get('[data-cy=catagory-hope]').should('exist')
    .get('[data-cy=catagory-leadership]').should('exist')
    .get('[data-cy=catagory-inspirational]').should('exist')
    .get('[data-cy=catagory-laughs]').should('exist')
  })

  it.only('Should have a Hope Quotes Page that displays quotes', () => {
    cy.get('[data-cy=select-catagory]').should('exist')
    .get('[data-cy=hope-title]').should('exist')
    .should('contain', 'Hope')
    .click()
    .get('[data-cy=card-display-header]')
    .should('exist')
    .should('contain', 'hope Quotes')
    .get('[data-cy=card]').should('exist')
    .get('[data-cy=quote]').should('exist')
    .should('contain', 'Because tomorrow, the sun will rise. Who knows what the tide may bring.')
    .get('[data-cy=author]').should('exist')
    .should('contain', 'Chuck Noland')
    .get('[data-cy=toggle-favorite]').should('exist')
    .should('contain', '( + ) Toggle Remembrance ( - )')
  })


})
