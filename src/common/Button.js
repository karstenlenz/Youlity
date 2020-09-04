import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
}

export default function Button({ children, onClick }) {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
}

const ButtonStyled = styled.button`
  display: block;
  padding: 10px;
  width: 100%;
  font-size: 18px;
`
