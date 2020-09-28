import React from 'react'
import styled from 'styled-components/macro'

export default function BrandHeadline({ firstWord, secondWord }) {
  return (
    <Wrapper>
      <Green>{firstWord}&nbsp; </Green> <Purple>{secondWord}</Purple>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 15px;
`

const Green = styled.h3`
  display: inline;
  color: var(--secondary);
  margin: 0;
`
const Purple = styled.h3`
  display: inline;
  color: var(--primary);
  margin: 0;
`
