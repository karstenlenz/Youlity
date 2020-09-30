import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

BrandHeadline.propTypes = {
  firstWord: PropTypes.string.isRequired,
  secondWord: PropTypes.string.isRequired,
}

export default function BrandHeadline({ firstWord, secondWord }) {
  return (
    <Wrapper>
      <SpanStyled color="green">{firstWord}&nbsp; </SpanStyled>{' '}
      <SpanStyled>{secondWord}</SpanStyled>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 15px;
`

const SpanStyled = styled.span`
  display: inline;
  font-size: 1.331em;
  color: ${(props) => {
    return props.color === 'green' ? 'var(--secondary)' : 'var(--primary)'
  }};
  margin: 0;
`
