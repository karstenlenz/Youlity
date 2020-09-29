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
  max-width: 900px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 15px;
  z-index: var(--floating-button);
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );

  @media screen and (min-width: 750px) {
    width: 100%;
    margin-left: -15px;
    left: auto;
    right: auto;
  }
`
const BottomSpacer = styled.div`
  margin-bottom: 80px;
`
