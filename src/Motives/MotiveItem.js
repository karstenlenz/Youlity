import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

export default function ({ children, index, isDragDisabled }) {
  return (
    <Draggable
      draggableId={'draggable-' + children}
      index={index}
      isDragDisabled={isDragDisabled}
    >
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
  width: 100%;
  background: white;
  box-shadow: var(--primary-shadow);
  display: inline-block;
  font-size: 1em;
  text-decoration: none;
  font-family: 'Ubuntu', sans-serif;
  height: 50px;
  padding: 10px;
  border: none;
  border-radius: 12px;
  text-align: center;
  max-width: 47.5vw;

  &:disabled {
    opacity: 0.4;
    color: rgba(255, 255, 255, 0.5);
    background: var(--light-grey);
    color: var(--medium-grey);
    opacity: 0.4;
  }
`
