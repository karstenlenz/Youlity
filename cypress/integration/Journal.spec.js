/// <reference types="Cypress" />

context('Journal List', () => {
  beforeEach(() => {
    cy.visit('/journal')
  })

  it('has a headline', () => {
    cy.contains('Tagebuch').should('exist')
  })

  it('can navigate to journal entry form', () => {
    cy.contains('Eintrag erstellen').click()
    cy.url().should('contain', '/journal/entry')
  })
})

context('Journal Form', () => {
  beforeEach(() => {
    cy.visit('/journal/entry')
  })

  it('has a headline', () => {
    cy.contains('Eintrag erstellen').should('exist')
  })

  it('cant submit an empty form', () => {
    cy.contains('Speichern').should('be.disabled')
  })

  it('can submit the form', () => {
    cy.contains('Titel').next('input').type('Test-Headline')
    cy.contains('Beschreibung')
      .next('textarea')
      .type('Test-Beschreibung lorem ipsum')
    cy.contains('Speichern').click()
    cy.contains('Test-Headline').should('exist')
    cy.contains('Test-Beschreibung').should('exist')
  })
})
