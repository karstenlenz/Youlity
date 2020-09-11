import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

export default function ({ children, index }) {
  return (
    <Draggable draggableId={'draggable-' + children} index={index}>
      {(provided) => (
        <MotiveItemStyled
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {children}
        </MotiveItemStyled>
      )}
    </Draggable>
  )
}

const MotiveItemStyled = styled.div`
  color: var(--dark-grey);
  width: 45%;
  background: white;
  box-shadow: var(--primary-shadow);
  display: inline-block;
  margin-bottom: 20px;
  font-size: 1em;
  text-decoration: none;
  font-family: 'Ubuntu', sans-serif;
  height: 50px;
  padding: 10px;
  border: none;
  border-radius: 39px;
  text-align: center;

  &:disabled {
    opacity: 0.4;
    color: rgba(255, 255, 255, 0.5);
    background: var(--light-grey);
    color: var(--medium-grey);
    opacity: 0.4;
  }
`
