import React from 'react'
import styled from 'styled-components'

export default function SectionBG({ children, className }) {
  return <Background className={className}>{children}</Background>
}

const Background = styled.section`
  background: var(--light-grey);
  margin: -15px -15px 40px -15px;
  padding: 1px 15px 30px 15px;
`
