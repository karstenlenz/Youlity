import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { styleData } from '../data/styleData'

export default function Result() {
  const { resultCode } = useParams()
  const resultArray = resultCode.split('&')
  const resultData = [
    { id: resultArray[0], yesCount: resultArray[1] },
    { id: resultArray[2], yesCount: resultArray[3] },
    { id: resultArray[4], yesCount: resultArray[5] },
  ]
  return (
    <>
      <h1>Ergebnis</h1>
      <p>Sie haben eben Tests für folgende Persönlichkeitsstile beantwortet</p>
      <ul>
        {resultData.map((result) => {
          return (
            <li>
              {styleData[result.id - 1]?.name}, Ergebnis:{result.yesCount}
            </li>
          )
        })}
      </ul>

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
