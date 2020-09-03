import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
}

export default function Button({ children, onClick }) {
  return <BlockButton onClick={onClick}>{children}</BlockButton>
}

const BlockButton = styled.button`
  display: block;
  padding: 10px;
  width: 100%;
  font-size: 18px;
`
