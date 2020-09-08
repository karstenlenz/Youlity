import React from 'react'
import Button from '../common/Button'
import FloatingButtonContainer from '../common/FloatingButtonContainer'
import HeadlineUnderline from '../common/HeadlineUnderline'

export default function MotivesIntro() {
  return (
    <>
      <img alt="" src="/img/motives-intro.svg" />
      <HeadlineUnderline>
        <h1>Schritt 1: Bedürfnisse</h1>
      </HeadlineUnderline>
      <p>
        Die Persönlichkeit jedes Mensch ist von 6 Grundbedürfnissen bestimmt.
        Dabei gibt es bei jedem von uns eine unterschiedliche Gewichtung.
        <br />
        In Schritt 1 müssen Sie für sich die wichtigsten drei Themen auswählen,
        die Sie in Ihrem Leben und Ihren Beziehungen zu anderen Menschen am
        meisten beschäftigen. Diese Grundbedürfnisse lassen erste Rückschlüsse
        auf Ihre Persönlichkeitsstile zu. <br />
        In Schritt 2 werden Sie dann 2 Fragebögen ausfüllen, um konkret zu
        prüfen, wie ausgeprägt diese Stile bei Ihnen sind.
      </p>
      <FloatingButtonContainer to="/motives/selection">
        <Button>Weiter zur Auswahl</Button>
      </FloatingButtonContainer>
    </>
  )
}
