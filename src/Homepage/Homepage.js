import React from 'react'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <>
      <img alt="" src="/img/mirror.svg" />
      <h1>Entdecken Sie Ihren Persönlichkeitsstil!</h1>
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
      <h2>Unser Versprechen</h2>
      <ul>
        <li>
          <h3>Seriös</h3>
          <p>
            Der Test basiert auf neuesten Forschungsergebnissen der Psychologie.
          </p>
        </li>
        <li>
          {' '}
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
        <Button>Test starten</Button>
      </Link>
      <small>
        Hinweis: Dieser Test ersetzt keine psychologische Beratung. Lorem
        ipsum….
      </small>
    </>
  )
}
