import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

IconButton.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default function IconButton({ imgUrl, altText, onClick }) {
  return (
    <ButtonContainer onClick={onClick}>
      <img src={imgUrl} alt={altText} />
    </ButtonContainer>
  )
}

const ButtonContainer = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background: none;
`
