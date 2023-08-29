describe('navigate to individual movie', () => {
beforeEach(() => {
  cy.intercept("GET",'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
    statusCode: 200,
    fixture: 'singleMovie.json'
  } )
})

  it('should show user single movie with information', () => {
    cy.visit('localhost:3000')
  })
})

// the user should see all movies displayed on homepage
// the user will click on a single movie of their choice
// the user will be taken to the single movies info page
// the user will see the background photo, the 