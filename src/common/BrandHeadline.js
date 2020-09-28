import React from 'react'
import styled from 'styled-components/macro'

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
  font-size: 1.331em;
  color: ${(props) => {
    return props.color === 'green' ? 'var(--secondary)' : 'var(--primary)'
  }};
  display: inline;
  margin: 0;
`
