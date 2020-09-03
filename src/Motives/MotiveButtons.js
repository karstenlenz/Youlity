import React from 'react'
import styled from 'styled-components'
import Button from '../common/Button'

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
          <Button
            key={text}
            onClick={(event) => handleMotiveClick(event, text)}
          >
            {text}
          </Button>
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
