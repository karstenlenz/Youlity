/// <reference types="Cypress" />

context('Result', () => {
  beforeEach(() => {
    cy.visit('result/194867523/51')
  })

  it('has a headline', () => {
    cy.contains('Ergebnis').should('exist')
  })

  it('has an introductory paragraph', () => {
    cy.contains(
      'Hier sehen Sie die Ergebnisse der bisherigen Fragebögen.'
    ).should('exist')
  })

  it('can navigate to the details page', () => {
    cy.get('a').contains('Selbstbewusst').click()
    cy.url().should('contain', '/style-info/1')
    cy.get('h1').should('contain', 'Der selbstbewusste Persönlichkeitsstil')
  })
})
