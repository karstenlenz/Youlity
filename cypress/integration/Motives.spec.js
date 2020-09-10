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

  it('has 1 img', () => {
    cy.get('img').should('have.length', 1)
  })

  it('has a headline', () => {
    cy.contains('Schritt 1: Bedürfnisse').should('exist')
  })

  it('has an introductory h2', () => {
    cy.contains('Bitte wählen Sie die 3').should('exist')
  })

  it('has 12 buttons', () => {
    cy.get('button').should('have.length', 12)
  })

  it('has 6 button pairs', () => {
    cy.get('button').parent().siblings().should('have.length', 6)
  })

  it('can select motives', () => {
    cy.get('button').contains('Anerkennung').click().should('be.disabled')
    cy.get('li:nth-child(1)').should('contain', 'Anerkennung')
  })

  it('moves on to the next step after selecting three motives', () => {
    cy.get('button').contains('Anerkennung').click()
    cy.get('button').contains('Grenzen').click()
    cy.get('button').contains('Solidarität').click()
    cy.url().should('contain', '/questionnaire/89')
  })

  it('can open the info layer', () => {
    cy.get('button').contains('i').click()
    cy.contains('Das Bedürfnis nach').should('exist')
  })
})
