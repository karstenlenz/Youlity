import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../common/Button'
import HeadlineUnderline from '../common/HeadlineUnderline'

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
      <Link to="/motives">
        <Button btnType="primary" isButtonDisabled={true}>
          Test starten
        </Button>
      </Link>
      <Button btnType="secondary" isButtonDisabled={true}>
        Secondary Button
      </Button>
      <Button btnType="white" isButtonDisabled={true}>
        White Button
      </Button>
      <small>
        Hinweis: Dieser Test ersetzt keine psychologische Beratung. Lorem
        ipsum….
      </small>
    </>
  )
}
