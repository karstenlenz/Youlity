import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'

FloatingButtonContainer.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired,
}

export default function FloatingButtonContainer({ children, to }) {
  return (
    <>
      <ButtonContainer to={to}>{children}</ButtonContainer>
      <BottomSpacer></BottomSpacer>
    </>
  )
}

const ButtonContainer = styled(Link)`
  z-index: var(--floating-button);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 900px;
  padding: 0 15px;
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );

  @media screen and (min-width: 750px) {
    width: 100%;
    left: auto;
    right: auto;
    margin-left: -15px;
  }
`
const BottomSpacer = styled.div`
  margin-bottom: 80px;
`
