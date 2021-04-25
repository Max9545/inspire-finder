context('Inspire Finder', () => {
  beforeEach(() => {
    cy
    .intercept('https://favqs.com/api/quotes/?filter=hope&type=tag', { fixture:'hopeQuotes.json' })
    .intercept('https://favqs.com/api/quotes/?filter=leadership&type=tag', { fixture:'leadershipQuotes.json' })
    .intercept('https://favqs.com/api/quotes/?filter=inspirational&type=tag', { fixture:'inspirationalQuotes.json' })
    .intercept('https://favqs.com/api/quotes/?filter=funny&type=tag', { fixture:'funnyQuotes.json' })
    .visit('http://localhost:3000')
  })

  it.only('Should have a Header', () => {
    cy.get('[data-cy=home-page]').should('exist')
    .get('[data-cy=header-container]').should('exist')
    .get('.title-to-home').should('exist')
    .get('[data-cy=header-title]').should('exist')    
    .should('contain', 'Inspire')
    .should('contain', 'Finder')
  })

  it('Should have a Home Page', () => {
    cy.get('[data-cy=header-container]').should('exist')
    .get('[data-cy=select-catagory]').should('exist')
    .get('[data-cy=catagory-hope]').should('exist')
    .get('[data-cy=catagory-leadership]').should('exist')
    .get('[data-cy=catagory-inspirational]').should('exist')
    .get('[data-cy=catagory-laughs]').should('exist')
  })

  it('Should have a Hope Quotes Page that displays quotes', () => {
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

  it('Should have a Leadership Quotes Page that displays quotes', () => {
    cy.get('[data-cy=select-catagory]').should('exist')
    .get('[data-cy=leadership-title]').should('exist')
    .should('contain', 'Leadership')
    .click()
    .get('[data-cy=card-display-header]')
    .should('exist')
    .should('contain', 'leadership Quotes')
    .get('[data-cy=card]').should('exist')
    .get('[data-cy=quote]').should('exist')
    .should('contain', 'A leader is a dealer in hope.')
    .get('[data-cy=author]').should('exist')
    .should('contain', 'Napoleon Bonaparte')
    .get('[data-cy=toggle-favorite]').should('exist')
    .should('contain', '( + ) Toggle Remembrance ( - )')
  })

  it('Should have a Inspirational Quotes Page that displays quotes', () => {
    cy.get('[data-cy=select-catagory]').should('exist')
    .get('[data-cy=inspirational-title]').should('exist')
    .should('contain', 'Inspirational')
    .click()
    .get('[data-cy=card-display-header]')
    .should('exist')
    .should('contain', 'inspirational Quotes')
    .get('[data-cy=card]').should('exist')
    .get('[data-cy=quote]').should('exist')
    .should('contain', 'Half a century ago, the amazing courage of Rosa Parks, the visionary leadership of Martin Luther King, and the inspirational actions of the civil rights movement led politicians to write equality into the law and make real the promise of America for all her citizens.')
    .get('[data-cy=author]').should('exist')
    .should('contain', 'David Cameron')
    .get('[data-cy=toggle-favorite]').should('exist')
    .should('contain', '( + ) Toggle Remembrance ( - )')
  })

  it('Should have a Funny Quotes Page that displays quotes', () => {
    cy.get('[data-cy=select-catagory]').should('exist')
    .get('[data-cy=laughs-title]').should('exist')
    .should('contain', 'Laughs')
    .click()
    .get('[data-cy=card-display-header]')
    .should('exist')
    .should('contain', 'funny Quotes')
    .get('[data-cy=card]').should('exist')
    .get('[data-cy=quote]').should('exist')
    .should('contain', "I've dealt with many crises in my life, but few will ever happen.")
    .get('[data-cy=author]').should('exist')
    .should('contain', 'Mark Twain')
    .get('[data-cy=toggle-favorite]').should('exist')
    .should('contain', '( + ) Toggle Remembrance ( - )')
  })

  it('Should have a Favorites Quotes Page that lets you know when you have no quotes', () => {
    cy.get('[data-cy=select-catagory]').should('exist')
    .get('[data-cy=favorites-from-home]').should('exist')
    .should('contain', 'Remembrances')
    .click()
    .get('[data-cy=favorites-display-header]')
    .should('exist')
    .should('contain', 'Use These As Intent For Your Days')
    .get('[data-cy=no-user-data]').should('exist')
    .should('contain', 'No Favorites yet')
    // .get('[data-cy=quote]').should('exist')
    // .should('contain', 'Because tomorrow, the sun will rise. Who knows what the tide may bring.')
    // .get('[data-cy=author]').should('exist')
    // .should('contain', 'Chuck Noland')
    // .get('[data-cy=toggle-favorite]').should('exist')
    // .should('contain', '( + ) Toggle Remembrance ( - )')
  })

  it('Should have a Searched Quotes Page that lets you know when you have no quotes', () => {
    cy.get('[data-cy=select-catagory]').should('exist')
    .get('[data-cy=favorites-from-home]').should('exist')
    .should('contain', 'Remembrances')
    .click()
    .get('[data-cy=favorites-display-header]')
    .should('exist')
    .should('contain', 'Use These As Intent For Your Days')
    .get('[data-cy=no-user-data]').should('exist')
    .should('contain', 'No Favorites yet')
    // .get('[data-cy=quote]').should('exist')
    // .should('contain', 'Because tomorrow, the sun will rise. Who knows what the tide may bring.')
    // .get('[data-cy=author]').should('exist')
    // .should('contain', 'Chuck Noland')
    // .get('[data-cy=toggle-favorite]').should('exist')
    // .should('contain', '( + ) Toggle Remembrance ( - )')
  })
})
