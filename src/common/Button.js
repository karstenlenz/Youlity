import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
}

export default function Button({ children, onClick }) {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
}

const ButtonStyled = styled.button`
  font-size: 1.21rem;
  text-decoration: none;
  font-family: 'Ubuntu', sans-serif;
  color: white;
  height: 50px;
  display: block;
  padding: 10px;
  width: 100%;
  background: var(--primary);
  border: none;
  border-radius: 39px;
`
