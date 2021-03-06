/// <reference types="Cypress" />

context('Questionnaire Intro', () => {
  beforeEach(() => {
    cy.visit('questionnaire/intro/194867523')
  })

  it('has a headline', () => {
    cy.contains('Schritt 2: Fragebogen').should('exist')
  })

  it('has an introductory paragraph', () => {
    cy.contains(
      'Im Folgenden präsentieren wir Ihnen als Ergebnis Ihrer Auswahl Fragebögen zu 2 Persönlichkeitsstilen.'
    ).should('exist')
  })

  it('can navigate to questionnaire', () => {
    cy.contains('Weiter').click()
    cy.get('button').contains('(Eher) Nein').should('exist')
    cy.get('button').contains('(Eher) Ja').should('exist')
  })

  it('can fill out the questionnaire', () => {
    cy.contains('Weiter').click()
    cy.get('button').contains('(Eher) Ja').as('yesButton')
    for (let i = 0; i < 16; i++) {
      cy.get('@yesButton').click()
    }
    cy.contains('Ergebnis').should('exist')
  })
})
