import React from 'react'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

export default function MotivesIntro() {
  return (
    <>
      <h1>Schritt 1: Bedürfnisse</h1>
      <img alt="" src="/img/motives-intro.svg" />
      <p>
        Die Persönlichkeit jedes Mensch ist von 6 Grundbedürfnissen bestimmt.
        Dabei gibt es bei jedem von uns eine unterschiedliche Gewichtung. In
        Schritt 1 müssen Sie für sich die wichtigsten drei Themen auswählen, die
        Sie in Ihrem Leben und Ihren Beziehungen zu anderen Menschen am meisten
        beschäftigen. <br />
        Diese Grundbedürfnisse lassen erste Rückschlüsse auf Ihre
        Persönlichkeitsstile zu. In Schritt 2 werden Sie dann 2 Fragebögen
        ausfüllen, um konkret zu prüfen, wie ausgeprägt diese Stile bei Ihnen
        sind.
      </p>
      <Link to="/motives/selection">
        <Button>Weiter zur Motivauswahl</Button>
      </Link>
    </>
  )
}
