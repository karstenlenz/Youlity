import React from 'react'
import styled from 'styled-components/macro'
import InfoOverlay from '../common/InfoOverlay'
import Button from '../common/Button'
import { motiveData } from '../data/motiveData'
import PropTypes from 'prop-types'

MotiveButtons.propTypes = {
  handleMotiveClick: PropTypes.func.isRequired,
}

export default function MotiveButtons({ handleMotiveClick }) {
  return (
    <ButtonList>
      {motiveData.map((motive) => {
        return (
          <ButtonPair key={motive.name}>
            <Button
              btnType="white"
              onClick={(event) => handleMotiveClick(event, motive.name)}
            >
              {motive.name}
            </Button>
            <InfoOverlay>
              <h2>{motive.name}</h2>
              <p>{motive.description}</p>
            </InfoOverlay>
          </ButtonPair>
        )
      })}
    </ButtonList>
  )
}

const ButtonPair = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`

const ButtonList = styled.section`
  display: flex;
  flex-direction: column;
`
