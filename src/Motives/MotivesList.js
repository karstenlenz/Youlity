import React from 'react'
import styled from 'styled-components/macro'

export const MotivesList = React.forwardRef(
  ({ children, isDraggingOver }, ref) => (
    <MotiveContainer isDraggingOver={isDraggingOver} ref={ref}>
      {children}
    </MotiveContainer>
  )
)

const MotiveContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
  row-gap: 30px;
  column-gap: 15px;
  justify-content: stretch;
  margin: 0 -15px;
  padding: 30px 15px;
  ${(props) => props.isDraggingOver && 'background: var(--light-grey)'};
`
