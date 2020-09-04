import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

PrimaryBtn.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
}

export default function PrimaryBtn({ children, onClick }) {
  return <PrimaryBtnStyled onClick={onClick}>{children}</PrimaryBtnStyled>
}

const PrimaryBtnStyled = styled.button`
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

  &:disabled {
    opacity: 0.3;
    color:color: rgba(0, 0, 0, 0.5) ;
  }
`
