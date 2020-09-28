import React from 'react'
import styled from 'styled-components/macro'
import { breakpoints } from './util'

export default function Card({ children }) {
  return <CardBG>{children}</CardBG>
}

const CardBG = styled.div`
  display: inline-block;
  background: white;
  border-radius: 12px;
  box-shadow: var(--primary-shadow);
  margin: 30px 0;
  padding: 15px;
  position: relative;
  ${breakpoints('max-width', '%', [{ 750: 40 }])}
`
