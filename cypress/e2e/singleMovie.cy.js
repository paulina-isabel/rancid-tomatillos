describe("navigate to individual movie", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 200,
        fixture: "singleMovie.json",
      }
    ).visit("http://localhost:3000/");
  });

  it("should show user landing page with all movies, titles, and release dates", () => {
    cy.get(".card-container").find(".card").should("have.length", 4);
    // cy.get(".image")
  });
});

// the user should see all movies displayed on homepage
// the user will click on a single movie of their choice
// the user will be taken to the single movies info page
// the user will see the background photo, the description, the realease date, and the runtime
// the user will see the Go Back Home button
