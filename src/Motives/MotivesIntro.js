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
        Dabei gibt es bei jedem von uns eine unterschiedliche Gewichtung.
        <br />
        Wählen Sie in Schritt 1 Ihre drei wichtigsten Grundbedürfnisse.
        <br />
        In Schritt 2 werden Ihnen als Ergebnis Ihrer Auswahl zwei auf Sie
        angepasste Fragebögen präsentiert.
        <br />
        Im Anschluss erhalten Sie Ihr Ergebnis und dazu passende Informationen.
      </p>
      <Collapse headline="Mehr erfahren">
        Hier kommt später Text vom Psychologen rein.
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
