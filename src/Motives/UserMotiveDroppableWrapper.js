import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import MotiveItem from './MotiveItem'
import { UserMotiveDropzone } from './UserMotiveDropzone'
import { motiveData } from '../data/motiveData'

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
          {motives[droppableId]?.map((motive, index) => (
            <MotiveItem
              droppableId={droppableId}
              onClick={handleMotiveClick}
              index={index}
              key={motive}
              motiveIndex={motive - 1}
            >
              {motiveData[motive - 1].name}
            </MotiveItem>
          ))}
          <span
            style={{
              display: 'none',
            }}
          >
            {provided.placeholder}
          </span>
        </UserMotiveDropzone>
      )}
    </Droppable>
  )
}