import React from 'react'
import styled from 'styled-components'

export const UserMotiveDropzone = React.forwardRef(({ children }, ref) => (
  <DropzoneBG ref={ref}>{children}</DropzoneBG>
))

const DropzoneBG = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 60px);
  grid-template-columns: repeat(8, 1fr);
  grid-template-areas:
    '. . one one one one . .'
    ' two two two two three three three three';
  background: var(--secondary);
  margin: 0 -15px;
  padding: 30px 15px;
  min-height: 80px;
  gap: 15px;

  > div {
    width: 100% !important;
  }

  > :nth-child(1) {
    grid-area: one;
  }
  > :nth-child(2) {
    grid-area: two;
  }
  > :nth-child(3) {
    grid-area: three;
  }
`
