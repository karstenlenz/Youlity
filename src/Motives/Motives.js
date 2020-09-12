import React, { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import HeadlineUnderline from '../common/HeadlineUnderline'
import MotiveItem from './MotiveItem'
import { UserMotiveDropzone } from './UserMotiveDropzone'
import { MotivesList } from './MotivesList'
import { useEffect } from 'react'
import FloatingButtonContainer from '../common/FloatingButtonContainer'
import Button from '../common/Button'
import { evaluateMatchingStyles } from './util'

export default function Motives() {
  const [motives, setMotives] = useState({
    slot1: [],
    slot2: [],
    slot3: [],
    list: [
      'Anerkennung',
      'Wichtigkeit',
      'Solidarität',
      'Autonomie',
      'Grenzen',
      'Verlässlichkeit',
    ],
  })

  const [questionnaireUrl, setQuestionnaireUrl] = useState('/')

  useEffect(() => {
    if (motives.slot1 && motives.slot2 && motives.slot3) {
      const userPersonalityStyles = evaluateMatchingStyles([
        motives.slot1[0],
        motives.slot2[0],
        motives.slot3[0],
      ])
      const questionnaireUrl =
        '/questionnaire/' + userPersonalityStyles[0] + userPersonalityStyles[1]
      setQuestionnaireUrl(questionnaireUrl)
    }
  }, [motives])

  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <HeadlineUnderline>
        <h1>Schritt 1: Bedürfnisse</h1>
      </HeadlineUnderline>
      <SmallH2 as="h2">
        Wählen Sie bitte intuitiv die drei Bedürfnisse aus, die für Sie am
        Wichtigsten sind. Entscheiden Sie sich für die Begriffe, die Sie zuerst
        ansprechen.
      </SmallH2>
      <MotiveBG>
        <Droppable droppableId="motive-1">
          {(provided) => (
            <UserMotiveDropzone
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {motives.slot1?.map((motive, index) => (
                <MotiveItem index={index} key={motive}>
                  {motive}
                </MotiveItem>
              ))}
              {provided.placeholder}
            </UserMotiveDropzone>
          )}
        </Droppable>
        <Droppable droppableId="motive-2">
          {(provided) => (
            <UserMotiveDropzone
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {motives.slot2?.map((motive, index) => (
                <MotiveItem index={index} key={motive}>
                  {motive}
                </MotiveItem>
              ))}
              {provided.placeholder}
            </UserMotiveDropzone>
          )}
        </Droppable>
        <Droppable droppableId="motive-3">
          {(provided) => (
            <UserMotiveDropzone
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {motives.slot3?.map((motive, index) => (
                <MotiveItem index={index} key={motive}>
                  {motive}
                </MotiveItem>
              ))}
              {provided.placeholder}
            </UserMotiveDropzone>
          )}
        </Droppable>
      </MotiveBG>

      <Droppable droppableId="motives-list">
        {(provided) => (
          <MotivesList ref={provided.innerRef} {...provided.droppableProps}>
            {motives.list?.map((motive, index) => (
              <MotiveItem
                key={'motives-list' + motive}
                index={index}
                isDragDisabled={motives.slot1 && motives.slot2 && motives.slot3}
              >
                {motive}
              </MotiveItem>
            ))}
            {provided.placeholder}
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
          Test starten
        </Button>
      </FloatingButtonContainer>
    </DragDropContext>
  )

  // function handleMotiveClick(event, motive) {
  //   const button = event.target
  //   button.disabled = true
  //   setUserMotives([...userMotives, motive])
  // }

  function onDragStart() {
    if (window.navigator.vibrate) {
      window.navigator.vibrate(100)
    }
  }

  function onDragEnd(result) {
    if (!result.destination) {
      return
    }

    // assign the correct states to to source and destination
    let sourceState
    let destinationState

    if (result.source.droppableId === 'motive-1') {
      sourceState = 'slot1'
    } else if (result.source.droppableId === 'motive-2') {
      sourceState = 'slot2'
    } else if (result.source.droppableId === 'motive-3') {
      sourceState = 'slot3'
    } else if (result.source.droppableId === 'motives-list') {
      sourceState = 'list'
    }

    if (result.destination.droppableId === 'motive-1') {
      destinationState = 'slot1'
    } else if (result.destination.droppableId === 'motive-2') {
      destinationState = 'slot2'
    } else if (result.destination.droppableId === 'motive-3') {
      destinationState = 'slot3'
    } else if (result.destination.droppableId === 'motives-list') {
      destinationState = 'list'
    }

    // drop a list item on same list => trigger reorder
    if (result.destination.droppableId === result.source.droppableId) {
      const newOrder = reorder(
        motives[destinationState],
        result.source.index,
        result.destination.index
      )
      const newState = { ...motives }
      newState[sourceState] = newOrder
      setMotives(newState)
    } else if (
      (result.destination.droppableId === 'motive-1' ||
        result.destination.droppableId === 'motive-2' ||
        result.destination.droppableId === 'motive-3') &&
      motives[destinationState].length !== 0
    ) {
      // if a user-motive slot is already filled, the previous motive needs to be returned to the motives list
      console.log('d-state.length :' + destinationState.length)
      const newDestinationState = [motives[sourceState][result.source.index]]
      const newState = { ...motives }
      newState[destinationState] = newDestinationState
      const newSourceState = remove(motives[sourceState], result.source.index)
      newSourceState.push(motives[destinationState][0])
      newState[sourceState] = newSourceState
      setMotives(newState)
      console.log('passiert hier was?')
    } else {
      // remove motive from source and add it to motives list
      const newDestinationState = insert(
        [...motives[destinationState]],
        result.destination.index,
        motives[sourceState][result.source.index]
      )
      const newSourceState = remove(motives[sourceState], result.source.index)
      const newState = { ...motives }
      newState[destinationState] = newDestinationState
      newState[sourceState] = newSourceState
      setMotives(newState)
    }

    // drop a list item on other list => transfer item and reorder
    // if (result.destination.droppableId !== result.source.droppableId) {
    //   const newDestinationstate = [
    //     ...destinationState,
    //     sourceState[result.source.index],
    //   ]
    //   setDestinationState(newDestinationstate)
    //   const newSourceState = remove(sourceState, result.source.index)
    //   setSourceState(newSourceState)
    // }
  }

  function reorder(list, startIndex, endIndex) {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
  }
  function remove(list, index) {
    const result = [...list.slice(0, index), ...list.slice(index + 1)]
    return result
  }

  function insert(list, index, element) {
    const result = Array.from(list)
    result.splice(index, 0, element)
    return result
  }
}

const SmallH2 = styled.h4`
  font-size: 1.21rem;
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
