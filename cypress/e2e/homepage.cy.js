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
      cy.contains('h2', 'Wifelike')
      cy.contains('h3', '2022')
    })
    cy.get('.card').last().within(() => {
      cy.get('img[name=movie-poster]').should('exist')
      cy.contains('h2', 'X')
      cy.contains('h3', '2022')
    })
  })

  // 

})