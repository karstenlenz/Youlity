import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { styleData } from '../data/styleData'

export default function Result() {
  const { id, result } = useParams()

  return (
    <>
      <h1>Ergebnis</h1>
      <p>
        Das Testergebnis weist darauf hin, dass bei Ihnen folgender
        Persönlichkeitsstil überdurchschnittlich ausgeprägt ist:
      </p>
      <ResultDisplay>{styleData[id - 1]?.name}</ResultDisplay>
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
      )}
    </>
  )
}

const ResultDisplay = styled.span`
  font-size: 2em;
  font-weight: 700;
`
