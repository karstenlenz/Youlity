import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

Motives.propTypes = {
  userMotives: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleMotiveClick: PropTypes.func.isRequired,
}

export default function Motives({ userMotives, handleMotiveClick }) {
  const history = useHistory()

  useEffect(() => {
    userMotives.length === 3 && history.push('/questionnaire')
  }, [userMotives])

  return (
    <>
      <h1>Bedürfnisse</h1>
      <h2>
        Bitte wählen Sie die 3 Bedürfnisse aus, die Ihnen am wichtigsten sind.
        Fangen Sie mit dem wichtigsten an.
      </h2>
      <ol>
        <li> {userMotives[0]} </li>
        <li> {userMotives[1]} </li>
        <li> {userMotives[2]} </li>
      </ol>

      <ButtonList>
        <button onClick={(event) => handleMotiveClick(event, 'Anerkennung')}>
          Anerkennung
        </button>
        <button onClick={(event) => handleMotiveClick(event, 'Wichtigkeit')}>
          Wichtigkeit
        </button>
        <button
          onClick={(event) => handleMotiveClick(event, 'Verlässlichkeit')}
        >
          Verlässlichkeit
        </button>
        <button onClick={(event) => handleMotiveClick(event, 'Solidarität')}>
          Solidarität
        </button>
        <button onClick={(event) => handleMotiveClick(event, 'Autonomie')}>
          Autonomie
        </button>
        <button onClick={(event) => handleMotiveClick(event, 'Grenzen')}>
          Grenzen
        </button>
      </ButtonList>
    </>
  )
}

const ButtonList = styled.section`
  display: flex;
  flex-direction: column;

  button {
    height: 40px;
    margin-bottom: 20px;
  }
`
