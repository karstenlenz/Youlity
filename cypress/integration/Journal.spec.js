/// <reference types="Cypress" />

context('Journal List', () => {
  beforeEach(() => {
    cy.visit('/journal')
  })

  it('has a headline', () => {
    cy.contains('Tagebuch').should('exist')
  })

  it('can navigate to the simple journal entry form', () => {
    cy.contains('Freier Eintrag').click()
    cy.url().should('contain', '/journal/entry')
  })

  it('can navigate to the extended journal entry form', () => {
    cy.contains('Strukturierter Eintrag').click()
    cy.url().should('contain', '/journal/entry-extended')
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

context('The Extended Journal Form', () => {
  beforeEach(() => {
    cy.visit('/journal/entry-extended')
  })

  it('has a headline', () => {
    cy.contains('Strukturierte Situationsanalyse').should('exist')
  })

  it('cant submit an empty form', () => {
    cy.contains('Weiter').should('be.disabled')
  })

  it.only('can submit the form', () => {
    for (let i = 0; i <= 12; i++) {
      cy.get('textarea').type('Test-Beschreibung lorem ipsum Nr:' + i)
      cy.contains('Weiter').click()
    }

    cy.get('textarea').type('Test-Beschreibung letzter Schritt')
    cy.contains('Speichern').click()
    cy.contains('Test-Beschreibung').should('exist')
  })
})
