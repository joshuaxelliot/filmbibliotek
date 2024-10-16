describe('Movie App', () => {
  beforeEach(() => {
    cy.visit('/'); // Besök din applikation
  });

  it('should navigate to movie details and add a movie to My List', () => {
    // Klicka på filmen direkt
    cy.contains('Deadpool & Wolverine').click(); // Klicka på filmen när den dyker upp

    // Vänta tills sidan för filmens detaljer har laddats
    cy.url().should('include', '/movie/'); // Kontrollera att vi är på filmsidan

    // Lägg till filmen i favoriter
    cy.contains('cypress').click(); // Klicka på knappen för att lägga till i favoriter

    // Kontrollera att filmen finns i "My List"
    cy.visit('/my-list'); // Besök "My List" sidan
    cy.contains('Deadpool & Wolverine').should('exist'); // Kontrollera att filmen finns i listan
  });
});
