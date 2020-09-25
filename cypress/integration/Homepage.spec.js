/// <reference types="Cypress" />

context('Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has some imgs', () => {
    cy.get('img').should('exist')
  })

  it('has a headline', () => {
    cy.contains('Discover Your Personality!').should('exist')
  })

  it('uses the circle custom bullet point', () => {
    cy.get('ul > li ').should(
      'have.css',
      'background-image',
      `url(${'"' + Cypress.config().baseUrl + '/img/bullet_circle.svg"'})`
    )
  })

  it('uses the checkmark custom bullet point', () => {
    cy.get('li')
      .contains('Seriös')
      .parents()
      .should(
        'have.css',
        'background-image',
        `url(${'"' + Cypress.config().baseUrl + '/img/bullet_checkmark.svg"'})`
      )
  })

  it('can navigate to motive intro', () => {
    cy.get('button').contains('Test starten').click()
    cy.url().should('contain', '/motives/intro')
    cy.get('h1').should('contain', 'Schritt 1: Bedürfnisse')
  })

  it('can navigate to journal page', () => {
    cy.contains('Tagebuch öffnen').click()
    cy.url().should('contain', '/journal')
    cy.get('h1').should('contain', 'Tagebuch')
  })
})
