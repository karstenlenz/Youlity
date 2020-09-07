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
        Durch die Auswahl Ihrer Bedürfnisse haben wir 2 potentielle
        Persönlichkeitsstile identifiziert. <br /> Bitte füllen Sie jeweils
        einen Fragebogen aus, um die Ausprägung des jeweiligen Stils bei Ihnen
        zu testen. Es werden jeweils 8 Ja/Nein-Fragen gestellt. Pro Bogen dauert
        es ca. 3 Minuten. Die Reaktionszeit spielt keine Rolle, Sie können den
        Bogen in Ruhe ausfüllen.
      </p>
      <Button onClick={onButtonClick}>Weiter zum Fragebogen</Button>
    </>
  )
}
