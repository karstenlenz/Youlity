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
          onClick={() => onClick(motiveIndex + 1, droppableId)}
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
  display: inline-block;
  position: relative;
  z-index: var(--front);
  font-family: 'Ubuntu', sans-serif;
  font-size: 1em;
  line-height: 0;
  text-decoration: none;
  text-align: center;
  color: var(--dark-grey);
  background: white;
  box-shadow: var(--primary-shadow);
  width: 100%;
  max-width: 47.5vw;
  height: 58px;
  padding: 29px 0;
  border: ${(props) =>
    props.isDragging ? '1px solid var(--dark-grey)' : 'none'};
  border-radius: 12px;
`
