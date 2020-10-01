import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import MotiveItem from './MotiveItem'
import { UserMotiveDropzone } from './UserMotiveDropzone'
import { motiveData } from '../data/motiveData'
import HideElement from '../common/HideElement'
import PropTypes from 'prop-types'

UserMotiveDroppableWrapper.propTypes = {
  motives: PropTypes.object.isRequired,
  droppableId: PropTypes.string.isRequired,
  handleMotiveClick: PropTypes.func.isRequired,
}

export default function UserMotiveDroppableWrapper({
  motives,
  droppableId,
  handleMotiveClick,
}) {
  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => (
        <UserMotiveDropzone
          ref={provided.innerRef}
          {...provided.droppableProps}
          isDraggingOver={snapshot.isDraggingOver}
        >
          {motives[droppableId]?.map((motiveId, index) => (
            <MotiveItem
              droppableId={droppableId}
              onClick={handleMotiveClick}
              index={index}
              key={motiveId}
              motiveIndex={motiveId - 1}
            >
              {motiveData[motiveId - 1].name}
            </MotiveItem>
          ))}
          <HideElement>{provided.placeholder}</HideElement>
        </UserMotiveDropzone>
      )}
    </Droppable>
  )
}
