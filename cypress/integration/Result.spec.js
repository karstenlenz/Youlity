/// <reference types="Cypress" />

context('Homepage', () => {
  beforeEach(() => {
    cy.visit('/result/1694')
  })

  it.only('has intro img', () => {
    cy.get('main > img')
      .should('have.attr', 'src')
      .should('include', 'style_info.svg')
  })

  it('has a headline', () => {
    cy.get('h1').should('contain', 'Ergebnis')
  })

  it('has an introductory paragraph', () => {
    cy.get('p')
      .contains(
        'Sie haben eben Tests für folgende Persönlichkeitsstile ausgefüllt:'
      )
      .should('exist')
  })

  it('can navigate to the details page', () => {
    cy.get('a').contains('Zu den Informationen').click()
    cy.url().should('equal', `${Cypress.config().baseUrl + '/style-info/1'}`)
    cy.get('h1').should('contain', 'Der narzisstische Persönlichkeitsstil')
  })
})
