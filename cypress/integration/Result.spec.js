/// <reference types="Cypress" />

context('Homepage', () => {
  beforeEach(() => {
    cy.visit('/result/1694')
  })

  it('has intro img', () => {
    cy.get('main > img')
      .should('have.attr', 'src')
      .should('include', 'style_info.svg')
  })

  it('has a headline', () => {
    cy.contains('Ergebnis').should('exist')
  })

  it('has an introductory paragraph', () => {
    cy.contains(
      'Sie haben eben Tests für folgende Persönlichkeitsstile ausgefüllt:'
    ).should('exist')
  })

  it('can navigate to the details page', () => {
    cy.get('a').contains('Zu den Informationen').click()
    cy.url().should('contain', '/style-info/1')
    cy.get('h1').should('contain', 'Der selbstbewusste Persönlichkeitsstil')
  })
})
