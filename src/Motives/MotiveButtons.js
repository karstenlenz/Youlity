import React from 'react'
import styled from 'styled-components'

export default function MotiveButtons({ handleMotiveClick }) {
  const motives = [
    'Anerkennung',
    'Wichtigkeit',
    'Verlässlichkeit',
    'Solidarität',
    'Autonomie',
    'Grenzen',
  ]

  return (
    <ButtonList>
      {motives.map((text) => {
        return (
          <button
            key={text}
            onClick={(event) => handleMotiveClick(event, text)}
          >
            {text}
          </button>
        )
      })}
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
