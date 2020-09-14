import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import Button from '../common/Button'
import FloatingButtonContainer from '../common/FloatingButtonContainer'
import HeadlineUnderline from '../common/HeadlineUnderline'
import { motiveData } from '../data/motiveData'
import MotiveItem from './MotiveItem'
import { MotivesList } from './MotivesList'
import { useMotiveSelection } from './useMotiveSelection'
import UserMotiveDroppableWrapper from './UserMotiveDroppableWrapper'

export default function Motives() {
  const {
    onDragStart,
    onDragEnd,
    motives,
    questionnaireUrl,
    handleMotiveClick,
  } = useMotiveSelection()

  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <HeadlineUnderline>
        <h1>Schritt 1: Bedürfnisse</h1>
      </HeadlineUnderline>
      <SmallH2 as="h2">
        Wählen Sie bitte intuitiv die drei Bedürfnisse aus, die für Sie am
        Wichtigsten sind. Sie können die Bedürfnisse hin- und herziehen oder
        anklicken.
      </SmallH2>
      <MotiveBG>
        <UserMotiveDroppableWrapper
          droppableId="slot1"
          motives={motives}
          handleMotiveClick={handleMotiveClick}
        />
        <UserMotiveDroppableWrapper
          droppableId="slot2"
          motives={motives}
          handleMotiveClick={handleMotiveClick}
        />
        <UserMotiveDroppableWrapper
          droppableId="slot3"
          motives={motives}
          handleMotiveClick={handleMotiveClick}
        />
      </MotiveBG>
      <Droppable droppableId="motives-list">
        {(provided, snapshot) => (
          <MotivesList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {motives.list?.map((motive, index) => (
              <MotiveItem
                droppableId="motives-list"
                onClick={handleMotiveClick}
                key={'motives-list' + motive}
                index={index}
                isDragDisabled={motives.slot1 && motives.slot2 && motives.slot3}
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
          </MotivesList>
        )}
      </Droppable>
      <FloatingButtonContainer to={questionnaireUrl}>
        <Button
          isButtonDisabled={
            motives.slot1.length === 1 &&
            motives.slot2.length === 1 &&
            motives.slot3.length === 1
              ? false
              : true
          }
          btnType="primary"
        >
          Fragebogen starten
        </Button>
      </FloatingButtonContainer>
    </DragDropContext>
  )
}

const SmallH2 = styled.h6`
  font-size: 1em;
  margin-top: 0;
`

const MotiveBG = styled.section`
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
