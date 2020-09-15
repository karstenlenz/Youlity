import React from 'react'
import Button from '../common/Button'
import HeadlineUnderline from '../common/HeadlineUnderline'

export default function QuestionnaireIntro({ onButtonClick }) {
  return (
    <>
      <img alt="" src="/img/questionnaire-intro.svg" />
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
      <Button onClick={onButtonClick}>Weiter zum Fragebogen</Button>
    </>
  )
}
