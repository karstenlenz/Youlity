import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components/macro'
import InfoOverlay from '../common/InfoOverlay'
import { motiveData } from '../data/motiveData'

export default function ({
  children,
  index,
  isDragDisabled,
  motiveIndex,
  onClick,
  droppableId,
}) {
  return (
    <Draggable
      draggableId={'draggable-' + children}
      index={index}
      isDragDisabled={isDragDisabled}
    >
      {(provided, snapshot) => (
        <MotiveItemStyled
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={(event) => onClick(event, motiveIndex + 1, droppableId)}
          style={getStyle(provided.draggableProps.style, snapshot)}
          isDragging={snapshot.isDragging}
        >
          {children}
          <PositionedInfoOverlay>
            <h2>{motiveData[motiveIndex].name}</h2>
            <p>{motiveData[motiveIndex].description}</p>
          </PositionedInfoOverlay>
        </MotiveItemStyled>
      )}
    </Draggable>
  )

  function getStyle(style, snapshot) {
    if (!snapshot.isDragging) return {}
    if (!snapshot.isDropAnimating) {
      return style
    }

    return {
      ...style,
      transitionDuration: `0.001s`,
    }
  }
}

const PositionedInfoOverlay = styled(InfoOverlay)`
  position: absolute;
  top: -40px;
  right: -10px;
`

const MotiveItemStyled = styled.div`
  position: relative;
  color: var(--dark-grey);
  width: 100%;
  background: white;
  box-shadow: var(--primary-shadow);
  display: inline-block;
  font-size: 1em;
  line-height: 0;
  text-decoration: none;
  font-family: 'Ubuntu', sans-serif;
  height: 58px;
  padding: 29px 0;
  border: ${(props) =>
    props.isDragging ? '1px solid var(--dark-grey)' : 'none'};
  border-radius: 12px;
  text-align: center;
  max-width: 47.5vw;
  z-index: var(--front);

  &:disabled {
    opacity: 0.4;
    color: rgba(255, 255, 255, 0.5);
    background: var(--light-grey);
    color: var(--medium-grey);
    opacity: 0.4;
  }
`
