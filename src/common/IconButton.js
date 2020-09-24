import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

IconButton.propTypes = {
  onClick: PropTypes.func,
}

export default function IconButton({ children, onClick }) {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
}

const ButtonContainer = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background: none;
`
