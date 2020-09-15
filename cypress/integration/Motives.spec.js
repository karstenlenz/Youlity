/// <reference types="Cypress" />

context('Motives Intro', () => {
  beforeEach(() => {
    cy.visit('/motives/intro')
  })

  it('has 1 img', () => {
    cy.get('img').should('have.length', 1)
  })

  it('has a headline', () => {
    cy.contains('Schritt 1: Bedürfnisse').should('exist')
  })

  it('has an introductory paragraph', () => {
    cy.contains(
      'Die Persönlichkeit jedes Menschen ist von 6 Grundbedürfnissen bestimmt.'
    ).should('exist')
  })

  it('can navigate to motive selection', () => {
    cy.get('button').contains('Weiter zur Auswahl').click()
    cy.url().should('contain', '/motives/selection')
  })
})

context('Motives Selection', () => {
  beforeEach(() => {
    cy.visit('/motives/selection')
  })

  it('has a headline', () => {
    cy.contains('Schritt 1: Bedürfnisse').should('exist')
  })

  it('has an introductory h2', () => {
    cy.contains(
      'Wählen Sie bitte intuitiv die drei Bedürfnisse aus, die für Sie am Wichtigsten sind.'
    ).should('exist')
  })

  it('moves on to the next step after selecting three motives', () => {
    cy.contains('Anerkennung').click()
    cy.contains('Grenzen').click()
    cy.contains('Solidarität').click()
    cy.contains('Fragebogen starten').click()
    cy.url().should('contain', '/questionnaire/89')
  })

  it('can open the info layer', () => {
    cy.contains('Autonomie').children().contains('i').click()
    cy.contains('Selbst bestimmen zu dürfen').should('exist')
  })
})
