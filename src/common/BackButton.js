import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button'

export default function BackButton() {
  const history = useHistory()
  console.log(history)
  return (
    <ButtonContainer>
      <Button btnType="secondary" onClick={() => history.goBack()}>
        zurück
      </Button>
      <BottomSpacer />
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
  position: fixed;
  left: 15px;
  right: 15px;
  bottom: 0;
  z-index: var(--floating-button);
`
const BottomSpacer = styled.div`
  margin-bottom: 80px;
`
