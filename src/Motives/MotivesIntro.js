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
        Leben heißt, in Beziehung zu gehen. Wie Menschen in Beziehung gehen,
        hängt stark von ihrer Persönlichkeit ab. Dabei spielen sechs
        Grundbedürfnisse eine zentrale Rolle. Welche Grundbedürfnisse für
        Menschen bedeutsam werden, entscheidet sich in ihrer Lebensgeschichte.
        Die Persönlichkeit jedes Menschen ist ein Ergebnis aus der Gewichtung
        dieser sechs Grundbedürfnisse.
        <br />
        Wählen Sie in Schritt 1 Ihre drei wichtigsten Grundbedürfnisse.
        <br />
        In Schritt 2 werden Ihnen als Ergebnis Ihrer Auswahl zwei auf Sie
        angepasste Fragebögen präsentiert.
        <br />
        Im Anschluss erhalten Sie Ihr Ergebnis und dazu passende Informationen.
      </p>
      <FloatingButtonContainer to="/motives/selection">
        <Button>Weiter zur Auswahl</Button>
      </FloatingButtonContainer>
    </>
  )
}
