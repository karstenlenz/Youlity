import React from 'react'
import styled from 'styled-components'

export default function MotiveButtons({ handleMotiveClick }) {
  return (
    <ButtonList>
      <button onClick={(event) => handleMotiveClick(event, 'Anerkennung')}>
        Anerkennung
      </button>
      <button onClick={(event) => handleMotiveClick(event, 'Wichtigkeit')}>
        Wichtigkeit
      </button>
      <button onClick={(event) => handleMotiveClick(event, 'Verlässlichkeit')}>
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
