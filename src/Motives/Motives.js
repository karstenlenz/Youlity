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
  const [userMotives, setUserMotives] = useState([])
  const [listMotives, setListMotives] = useState([
    'Anerkennung',
    'Wichtigkeit',
    'Solidarität',
    'Autonomie',
    'Grenzen',
    'Verlässlichkeit',
  ])
  const [questionnaireUrl, setQuestionnaireUrl] = useState('/')

  useEffect(() => {}, [userMotives])

  useEffect(() => {
    if (userMotives.length === 3) {
      const userPersonalityStyles = evaluateMatchingStyles(userMotives)
      const questionnaireUrl =
        '/questionnaire/' + userPersonalityStyles[0] + userPersonalityStyles[1]
      setQuestionnaireUrl(questionnaireUrl)
    }
  }, [userMotives])

  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <HeadlineUnderline>
        <h1>Schritt 1: Bedürfnisse</h1>
      </HeadlineUnderline>
      <SmallH2>
        Wählen Sie bitte intuitiv die drei Bedürfnisse aus, die für Sie am
        Wichtigsten sind. Entscheiden Sie sich für die Begriffe, die Sie zuerst
        ansprechen.
      </SmallH2>
      <Droppable droppableId="user-motives">
        {(provided) => (
          <UserMotiveDropzone
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {userMotives.map((motive, index) => (
              <MotiveItem index={index} key={motive}>
                {motive}
              </MotiveItem>
            ))}
            {provided.placeholder}
          </UserMotiveDropzone>
        )}
      </Droppable>
      <Droppable droppableId="motives-list">
        {(provided) => (
          <MotivesList ref={provided.innerRef} {...provided.droppableProps}>
            {listMotives.map((motive, index) => (
              <MotiveItem
                key={'motives-list' + motive}
                index={index}
                isDragDisabled={userMotives.length === 3}
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
          isButtonDisabled={userMotives.length === 3 ? false : true}
          btnType="primary"
        >
          Test starten
        </Button>
      </FloatingButtonContainer>
    </DragDropContext>
  )

  function handleMotiveClick(event, motive) {
    const button = event.target
    button.disabled = true
    setUserMotives([...userMotives, motive])
  }

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
    let setSourceState
    let destinationState
    let setDestinationState

    if (result.source.droppableId === 'user-motives') {
      sourceState = userMotives
      setSourceState = setUserMotives
    } else if (result.source.droppableId === 'motives-list') {
      sourceState = listMotives
      setSourceState = setListMotives
    }

    if (result.destination.droppableId === 'user-motives') {
      destinationState = userMotives
      setDestinationState = setUserMotives
    } else if (result.destination.droppableId === 'motives-list') {
      destinationState = listMotives
      setDestinationState = setListMotives
    }

    // drop a list item on same list => trigger reorder
    if (result.destination.droppableId === result.source.droppableId) {
      const newState = reorder(
        destinationState,
        result.source.index,
        result.destination.index
      )
      setDestinationState(newState)
    }

    // drop a list item on other list => transfer item and reorder
    if (result.destination.droppableId !== result.source.droppableId) {
      const newDestinationstate = [
        ...destinationState,
        sourceState[result.source.index],
      ]
      setDestinationState(newDestinationstate)
      const newSourceState = remove(sourceState, result.source.index)
      setSourceState(newSourceState)
    }
  }

  function reorder(list, startIndex, endIndex) {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
  }
  function remove(list, index) {
    const result = Array.from(list)
    result.splice(index, 1)
    return result
  }
}

const SmallH2 = styled.h4``
