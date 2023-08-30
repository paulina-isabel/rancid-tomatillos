describe('landing page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'allMovies.json'
    })
    cy.visit('http://localhost:3000/')
  })

  it('should show all movies when on the homepage', () => {
    cy.location('pathname').should('eq', '/')
    cy.get('.card').first().within(() => {
      cy.get('img[name=movie-poster]').should('exist')
      cy.contains('h2', 'Wifelike (2022')
      cy.contains('h3', '6/10')
      cy.get('.star').should('exist')
    })
    cy.get('.card').last().within(() => {
      cy.get('img[name=movie-poster]').should('exist')
      cy.contains('h2', 'X (2022')
      cy.contains('h3', '1/10')
      cy.get('.star').should('exist')
    })
  })
})