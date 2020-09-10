/// <reference types="Cypress" />

context('Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has 1 img', () => {
    cy.get('img').should('have.length', 1)
  })

  it('has a headline', () => {
    cy.contains('Entdecken Sie Ihren Persönlichkeitsstil!').should('exist')
  })

  it('has an introductory bullet point', () => {
    cy.contains(
      'Lernen Sie sich selbst kennen, mit Ihren eigenen Stärken und Schwächen!'
    ).should('exist')
  })

  it('uses the circle custom bullet point', () => {
    cy.get('ul > li ').should(
      'have.css',
      'background-image',
      `url(${'"' + Cypress.config().baseUrl + '/img/bullet_circle.svg"'})`
    )
  })

  it('uses the checkmark custom bullet point', () => {
    cy.get('ul:nth-of-type(2) > li ').should(
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
})
