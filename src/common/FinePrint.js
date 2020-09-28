import React from 'react'
import styled from 'styled-components/macro'

export default function FinePrint({ children }) {
  return <SmallStyled>{children}</SmallStyled>
}

const SmallStyled = styled.small`
  margin-top: 20px;
  display: block;
`
