import React from 'react'
import styled from 'styled-components/macro'

export default function SectionBGWithButton({ children, className }) {
  return <Background className={className}>{children}</Background>
}

const Background = styled.section`
  background: var(--light-grey);
  margin: 0 -15px 20px -15px;
  padding: 1px 15px 1px 15px;
`
