import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { styleData } from '../data/styleData'

export default function Result() {
  const { resultCode } = useParams()
  const resultArray = resultCode.split('&')
  const resultData = [
    { id: resultArray[0], yesCount: resultArray[1] },
    { id: resultArray[2], yesCount: resultArray[3] },
  ]
  const [isNoticeVisible, setIsNoticeVisible] = useState(true)

  return (
    <>
      {isNoticeVisible && (
        <Notice>
          <button onClick={() => setIsNoticeVisible(false)}>X</button>
          <h3>Hinweis</h3>
          <p>
            Unser Testergebnis stellt nur eine Tendenz dar und ersetzt keine
            psychologische Beratung. Wenn Sie sich unwohl fühlen, holen Sie sich
            professionelle Hilfe.
          </p>
          <a href="https://www.psychenet.de/de/hilfe-finden/schnelle-hilfe/krisenanlaufstellen.html">
            Ansprechpartner
          </a>
        </Notice>
      )}

      <h1>Ergebnis</h1>
      <p>Sie haben eben Tests für folgende Persönlichkeitsstile ausgefüllt</p>
      <ul>
        {resultData.map((result) => {
          return (
            <li>
              <h3> {styleData[result.id - 1]?.name}</h3>
              <p>
                Sie haben {result.yesCount} von{' '}
                {styleData[result.id - 1].questions.length} Fragen mit "Ja"
                beantwortet.
              </p>
              {result.yesCount > 5 ? (
                <>
                  <p>
                    Das deutet darauf hin, dass dieser Stil bei Ihnen
                    überdurchschnittlich ausgeprägt ist. <br />
                    Das heißt nicht, dass etwas mit Ihnen „nicht stimmt“, oder
                    eine Störung vorliegt! Jeder Mensch hat einen oder mehrere
                    dominante Persönlichkeitsstile. Erst wenn Sie unter Ihrer
                    Persönlichkeit leiden, besteht Handlungsbedarf. <br />
                    Wir haben Ihnen die wichtigsten Informationen und Tipps zu
                    diesem Stil zusammengestellt.
                  </p>
                  <a href="#">Zu den Informationen</a>
                </>
              ) : (
                <p>
                  Das deutet <strong>nicht</strong> darauf hin, dass dieser Stil
                  bei Ihnen überdurchschnittlich ausgeprägt ist.
                </p>
              )}
            </li>
          )
        })}
      </ul>
      <p>
        Tipp: Wir speichern Ihr Ergebnis nicht, aber Sie können sich diese Seite
        im Browser als Lesezeichen speichern, um diese Informationen erneut
        aufzurufen.
      </p>

      {/* <ResultDisplay>{styleData[id - 1]?.name}</ResultDisplay>
      <p>
        Das heißt nicht, dass etwas mit Ihnen „nicht stimmt“, oder eine Störung
        vorliegt! Jeder Mensch hat einen oder mehrere dominante
        Persönlichkeitsstile. Erst wenn Sie unter Ihrer Persönlichkeit leiden,
        besteht Handlungsbedarf.
      </p>
      {parseInt(result) === 1 ? (
        <h2>Positives Ergebnis</h2>
      ) : (
        <h2>Negatives Ergebnis</h2>
      )} */}
    </>
  )
}

const ResultDisplay = styled.span`
  font-size: 2em;
  font-weight: 700;
`

const Notice = styled.section`
  background: #ddd;
  border: 1px solid black;
  padding: 15px;
  position: relative;

  button {
    position: absolute;
    right: 10px;
  }
`
