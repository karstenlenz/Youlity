import React from 'react'
import styled from 'styled-components/macro'
import Button from '../common/Button'
import FloatingButtonContainer from '../common/FloatingButtonContainer'
import HeadlineUnderline from '../common/HeadlineUnderline'
import { ReactComponent as IntroImg } from '../img/questionnaire-intro.svg'

export default function QuestionnaireIntro({ questionnaireIds, results = '' }) {
  return (
    <>
      <IntroImgStyled title="" />
      <HeadlineUnderline>
        <h1>Schritt 2: Fragebogen</h1>
      </HeadlineUnderline>
      <p>
        Im Folgenden präsentieren wir Ihnen als Ergebnis Ihrer Auswahl zwei
        Fragebögen. Diese sind auf Sie angepasst. Bitte beantworten Sie alle 16
        Fragen. Sie helfen, Ihre zentralen Persönlichkeitsaspekte besser
        einzuschätzen. Alle Fragen sind Ja/Nein-Fragen. Die Bearbeitungszeit pro
        Fragebogen beträgt circa drei Minuten.
      </p>
      <FloatingButtonContainer
        to={'/questionnaire/entry/' + questionnaireIds + '/' + results}
      >
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
