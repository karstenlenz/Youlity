import React from 'react'
import PropTypes from 'prop-types'
import { styleData } from '../data/styleData'

Result.propTypes = {
  resultData: PropTypes.object.isRequired,
}

export default function Result({ dominantType }) {
  return (
    <>
      <h1>Ergebnis</h1>
      <p>
        Das Testergebnis weist darauf hin, dass bei Ihnen folgender
        Persönlichkeitsstil überdurchschnittlich ausgeprägt ist:
      </p>
      <ResultDisplay>{styleData[dominantType]?.name}</ResultDisplay>
      <p>
        Das heißt nicht, dass etwas mit Ihnen „nicht stimmt“, oder eine Störung
        vorliegt! Jeder Mensch hat einen oder mehrere dominante
        Persönlichkeitsstile. Erst wenn Sie unter Ihrer Persönlichkeit leiden,
        besteht Handlungsbedarf.
      </p>
    </>
  )
}

const ResultDisplay = styled.span`
  font-size: 2em;
  font-weight: 700;
`
