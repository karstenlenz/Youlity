import React from 'react'
import PropTypes from 'prop-types'
import { styleData } from '../data/styleData'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router-dom'

Result.propTypes = {
  dominantStyle: PropTypes.number.isRequired,
}

export default function Result() {
  const { id } = useParams()

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
    </>
  )
}

const ResultDisplay = styled.span`
  font-size: 2em;
  font-weight: 700;
`
