import React from 'react'
import styled from 'styled-components/macro'
import Button from '../common/Button'
import Collapse from '../common/Collapse'
import FloatingButtonContainer from '../common/FloatingButtonContainer'
import HeadlineUnderline from '../common/HeadlineUnderline'
import { ReactComponent as IntroImg } from '../img/thinking.svg'

export default function MotivesIntro() {
  return (
    <>
      <IntroImgStyled title="" />
      <HeadlineUnderline>
        <h1>Schritt 1: Bedürfnisse</h1>
      </HeadlineUnderline>
      <p>
        Die Persönlichkeit jedes Menschen ist von 6 Grundbedürfnissen bestimmt.
        <br />
        Wählen Sie zunächst Ihre drei wichtigsten Grundbedürfnisse aus.
        <br />
        Daraufhin wählen wir die zwei relevantesten Persönlichkeitsstile aus und
        prüfen mit einem Fragebogen, wie ausgeprägt diese bei Ihnen sind.
        <br />
        Dazu erhalten Sie umfangreiche Informationen und Tipps.
      </p>
      <Collapse headline="Mehr erfahren">
        Leben heißt, in Beziehung zu gehen. Wie Menschen in Beziehung gehen,
        hängt stark von ihrer Persönlichkeit ab. Einige Menschen halten Distanz,
        andere brauchen viel Nähe. Dabei spielen sechs Grundbedürfnisse eine
        zentrale Rolle, die schon in der Kindheit entstehen und häufig nicht
        bewusst sind. Welche Grundbedürfnisse für Menschen bedeutsam werden,
        entscheidet sich in ihrer individuellen Lebensgeschichte. Die
        Persönlichkeit jedes Menschen ist ein Ergebnis aus der Gewichtung dieser
        sechs parallel bestehenden und unterschiedlich ausgeprägten
        Grundbedürfnisse.
      </Collapse>
      <FloatingButtonContainer to="/motives/entry">
        <Button>Weiter zur Auswahl</Button>
      </FloatingButtonContainer>
    </>
  )
}

const IntroImgStyled = styled(IntroImg)`
  display: block;
  margin: 0 auto;
  max-width: 300px;
`
