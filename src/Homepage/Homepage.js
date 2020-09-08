import React from 'react'
import styled from 'styled-components/macro'
import BulletList from '../common/BulletList'
import Button from '../common/Button'
import FloatingButtonContainer from '../common/FloatingButtonContainer'
import HeadlineUnderline from '../common/HeadlineUnderline'

export default function () {
  return (
    <>
      <img alt="" src="/img/mirror.svg" />
      <HeadlineUnderline>
        <h1>Entdecken Sie Ihren Persönlichkeitsstil!</h1>
      </HeadlineUnderline>
      <BulletList listType="bullet_circle">
        <li>
          Lernen Sie sich selbst kennen, mit Ihren eigenen Stärken und
          Schwächen!
        </li>
        <li>
          Erhalten Sie wertvolle Tipps zum Umgang mit Ihren Mitmenschen, egal ob
          im Beruf oder in privaten Beziehungen!
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
  display: block;
`
