/// <reference types="Cypress" />

context('Questionnaire Intro', () => {
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
      'Im Folgenden präsentieren wir Ihnen als Ergebnis Ihrer Auswahl zwei Fragebögen.'
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
