import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../common/Button'
import HeadlineUnderline from '../common/HeadlineUnderline'
import styled from 'styled-components'

export default function () {
  return (
    <>
      <img alt="" src="/img/mirror.svg" />
      <HeadlineUnderline>
        <h1>Entdecken Sie Ihren Persönlichkeitsstil!</h1>
      </HeadlineUnderline>
      <ul>
        <li>
          Lernen Sie sich selbst kennen, mit Ihren eigenen Stärken und
          Schwächen!
        </li>
        <li>
          Erhalten Sie wertvolle Tipps zum Umgang mit Ihren Mitmenschen, egal ob
          im Beruf oder in privaten Beziehungen!
        </li>
      </ul>
      <HeadlineUnderline>
        <h2>Unser Versprechen</h2>
      </HeadlineUnderline>
      <ul>
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
      </ul>
      <FixedButton to="/motives/intro">
        <Button btnType="primary">Test starten</Button>
      </FixedButton>
      <small>
        Hinweis: Dieser Test ersetzt keine psychologische Beratung. Lorem
        ipsum….
      </small>
    </>
  )
}

const FixedButton = styled(Link)`
  position: fixed;
  left: 15px;
  right: 15px;
  bottom: 0;
`
