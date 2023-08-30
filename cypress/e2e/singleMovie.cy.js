describe("navigate to individual movie", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 200,
        fixture: "allMovies.json",
      }
    )
    .visit("http://localhost:3000/");
  });

  it("should show user landing page with all movies, titles, and release dates", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/760104",
      {
        statusCode: 200,
        fixture: "singleMovie.json",
      }
    )
    cy.get(".card-container").find(".card").should("have.length", 4);
    cy.get(".card").last().click()
    cy.contains('p', 'In 1979')
    cy.contains('p', '2022')
    cy.contains('p', 'Runtime:')
    cy.contains('button', 'Go Back Home').click()
  });

  it("should display the landing page to the user", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 200,
        fixture: "allMovies.json",
      }
    )
    cy.get(".card-container").find(".card").should("have.length", 4);
  })
});
