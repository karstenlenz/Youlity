import React from 'react'
import styled from 'styled-components'

export const MotivesList = React.forwardRef(({ children }, ref) => (
  <MotiveContainer ref={ref}>{children}</MotiveContainer>
))

const MotiveContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px 0;
`
