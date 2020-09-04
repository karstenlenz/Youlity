import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

SecondaryBtn.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
}

export default function SecondaryBtn({ children, onClick }) {
  return <SecondaryBtnStyled onClick={onClick}>{children}</SecondaryBtnStyled>
}

const SecondaryBtnStyled = styled.button`
  font-size: 1.21rem;
  text-decoration: none;
  font-family: 'Ubuntu', sans-serif;
  color: white;
  height: 50px;
  display: block;
  padding: 10px;
  width: 100%;
  background: var(--secondary);
  border: none;
  border-radius: 39px;

  &:disabled {
    opacity: 0.4;
    color: rgba(0, 0, 0, 0.5);
  }
`
