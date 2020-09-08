/// <reference types="Cypress" />

context('Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has 1 img', () => {
    cy.get('img').should('have.length', 1)
  })

  it('has a headline', () => {
    cy.get('h1').should('contain', 'Entdecken Sie Ihren Persönlichkeitsstil!')
  })

  it('has an introductory bullet point', () => {
    cy.get('li').should(
      'contain',
      'Lernen Sie sich selbst kennen, mit Ihren eigenen Stärken und Schwächen!'
    )
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
    cy.get('button').click()
    cy.url().should('equal', `${Cypress.config().baseUrl + '/motives/intro'}`)
    cy.get('h1').should('contain', 'Schritt 1: Bedürfnisse')
  })
})
