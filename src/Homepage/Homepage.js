import React from 'react'
import styled from 'styled-components/macro'
import BulletList from '../common/BulletList'
import Button from '../common/Button'
import FloatingButtonContainer from '../common/FloatingButtonContainer'
import HeadlineUnderline from '../common/HeadlineUnderline'
import TextLink from '../common/TextLink'

export default function () {
  return (
    <>
      <img alt="" src="/img/mirror.svg" />
      <HeadlineUnderline>
        <h1>Entschlüsseln Sie Ihre Persönlichkeit!</h1>
      </HeadlineUnderline>
      <BulletList listType="bullet_circle">
        <li>
          Informieren Sie sich über persönliche Eigenarten, die Ihr Denken,
          Fühlen und Handeln prägen.
        </li>
        <li>
          Entwickeln Sie ein besseres Verständnis für sich selbst in
          Beziehungen.
        </li>
        <li>
          Profitieren Sie von speziell auf Sie zugeschnittenen Alltagstipps.
        </li>
      </BulletList>
      <HeadlineUnderline>
        <h2>Unser Versprechen</h2>
      </HeadlineUnderline>
      <BulletList listType="bullet_checkmark">
        <li>
          <h3>Seriös</h3>
          <p>
            Der Test basiert auf neuesten Forschungsergebnissen der Psychologie.
          </p>
        </li>
        <li>
          <h3>Schnell</h3>
          <p>Es dauert nur ca. 10 Minuten.</p>
        </li>
        <li>
          <h3>Sicher</h3>
          <p>
            Wir übermitteln keine Daten von Ihnen. Ihre Privatsphäre ist absolut
            sicher.
          </p>
        </li>
      </BulletList>
      <h2>Tagebuch</h2>
      <p>
        Unsere Tagebuchfunktion hilft Ihnen, Ihr Verhalten zu analysieren und
        dadurch erste Schritte zu einer Veränderung anzustoßen.
      </p>
      <TextLink href="/journal">Zum Tagebuch</TextLink>
      <FinePrint>
        Hinweis: Dieser Test ersetzt keine psychologische Beratung. Wenn Sie
        unter psychischen Problemen leiden, suchen Sie sich bitte professionelle
        Hilfe.
      </FinePrint>
      <FloatingButtonContainer to="/motives/intro">
        <Button btnType="primary">Test starten</Button>
      </FloatingButtonContainer>
    </>
  )
}

const FinePrint = styled.small`
  margin-top: 20px;
  display: block;
`
