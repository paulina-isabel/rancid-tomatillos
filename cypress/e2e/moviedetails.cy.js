describe("navigate to individual movie", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 200,
        fixture: "allMovies.json"
      }
    ).visit("http://localhost:3000/");
  });

  it("should allow a user to see a specific movie's details page", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/760104",
      {
        statusCode: 200,
        fixture: "movie760104.json",
      }
    );
    cy.location('pathname').should('eq', '/');
    cy.get(".card-container").find(".card").should("have.length", 4);
    cy.get(".card").last().click();
    cy.location('pathname').should('eq', '/760104');
    cy.contains("p", "In 1979");
    cy.contains("p", "2022");
    cy.contains("p", "Runtime: 106 minutes");
    cy.get(".arrow").click();
    cy.get(".card-container").find(".card").should("have.length", 4);
  });

  it("should allow a user to see a different movie's details page", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/1001835",
      {
        statusCode: 200,
        fixture: "movie1001835.json",
      }
    );
    cy.location('pathname').should('eq', '/');
    cy.get(".card-container").find(".card").should("have.length", 4);
    cy.get(".card").first().click();
    cy.location('pathname').should('eq', '/1001835');
    cy.contains("p", "A grieving detective in the near-future hunts down criminals who trade artificial humans on the black market. In the fight to end AI exploitation, an underground resistance attempts to infiltrate him by sabotaging the programming of the artificial human assigned as his companion to behave like his late wife. She begins to question her reality as memories of a past life begin to surface in a world where nothing is as it seems.");
    cy.contains("p", "2022");
    cy.contains("p", "Runtime: 106 minutes");
    cy.get(".arrow").click();
    cy.get(".card-container").find(".card").should("have.length", 4);
  });

  it('should display a helpful message to the user when an error occurs', () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/1001835",
      {
        statusCode: 500
      }
    ).visit("http://localhost:3000/1001835");
    cy.get(".login")
  })
})