import React from 'react'
import styled from 'styled-components'

export const MotivesList = React.forwardRef(({ children }, ref) => (
  <MotiveContainer ref={ref}>{children}</MotiveContainer>
))

const MotiveContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
  row-gap: 30px;
  column-gap: 15px;
  padding: 15px 0;
  justify-content: stretch;
`
