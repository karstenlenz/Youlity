/// <reference types="Cypress" />

context('Motives Intro', () => {
  beforeEach(() => {
    cy.visit('/questionnaire/89')
  })

  it('has 1 img', () => {
    cy.get('img').should('have.length', 1)
  })

  it('has a headline', () => {
    cy.get('h1').should('contain', 'Schritt 2: Fragebogen')
  })

  it('has an introductory paragraph', () => {
    cy.get('p').should(
      'contain',
      'Durch die Auswahl Ihrer Bedürfnisse haben wir 2 potentielle Persönlichkeitsstile identifiziert. '
    )
  })

  it('can navigate to motive selection', () => {
    cy.get('button').click()
    cy.get('button').contains('(Eher) Nein').should('exist')
    cy.get('button').contains('(Eher) Ja').should('exist')
  })

  it.only('can fill out the questionnaire', () => {
    cy.get('button').click()
    for (let i = 0; i < 16; i++) {
      cy.get('button').contains('(Eher) Ja').click()
    }
    cy.get('h1').should('contain', 'Ergebnis')
  })
})
