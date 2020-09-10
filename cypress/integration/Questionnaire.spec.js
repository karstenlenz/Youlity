/// <reference types="Cypress" />

context('Motives Intro', () => {
  beforeEach(() => {
    cy.visit('/questionnaire/89')
  })

  it('has 1 img', () => {
    cy.get('img').should('have.length', 1)
  })

  it('has a headline', () => {
    cy.contains('Schritt 2: Fragebogen').should('exist')
  })

  it('has an introductory paragraph', () => {
    cy.contains(
      'Durch die Auswahl Ihrer Bedürfnisse haben wir 2 potentielle Persönlichkeitsstile identifiziert. '
    ).should('exist')
  })

  it('can navigate to questionnaire', () => {
    cy.get('button').click()
    cy.get('button').contains('(Eher) Nein').should('exist')
    cy.get('button').contains('(Eher) Ja').should('exist')
  })

  it('can fill out the questionnaire', () => {
    cy.get('button').click()
    cy.get('button').contains('(Eher) Ja').as('yesButton')
    for (let i = 0; i < 16; i++) {
      cy.get('@yesButton').click()
    }
    cy.contains('Ergebnis').should('exist')
  })
})
