import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import React from 'react'

export default function FloatingButtonContainer({ children, to }) {
  return (
    <>
      <ButtonContainer to={to}>{children}</ButtonContainer>
      <BottomSpacer></BottomSpacer>
    </>
  )
}

const ButtonContainer = styled(Link)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: -15px;
  padding: 15px;
  z-index: var(--floating-button);
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
`
const BottomSpacer = styled.div`
  margin-bottom: 80px;
`
