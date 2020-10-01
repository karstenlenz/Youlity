import { useEffect, useState } from 'react'
import { motiveData } from '../data/motiveData'
import { evaluateMatchingStyles } from './util'

export function useMotiveSelection() {
  const [motives, setMotives] = useState({
    slot1: [],
    slot2: [],
    slot3: [],
    list: [1, 2, 3, 4, 5, 6],
  })

  const [questionnaireUrl, setQuestionnaireUrl] = useState('/')

  useEffect(() => {
    if (
      motives.slot1.length !== 0 &&
      motives.slot2.length !== 0 &&
      motives.slot3.length !== 0
    ) {
      const userMotive1 = motiveData[motives.slot1[0] - 1].name
      const userMotive2 = motiveData[motives.slot2[0] - 1].name
      const userMotive3 = motiveData[motives.slot3[0] - 1].name
      const userPersonalityStyles = evaluateMatchingStyles([
        userMotive1,
        userMotive2,
        userMotive3,
      ])
      const questionnaireUrl =
        '/questionnaire/intro/' + userPersonalityStyles.join('')

      setQuestionnaireUrl(questionnaireUrl)
    }
  }, [motives])

  function handleMotiveClick(motiveId, droppableId) {
    if (droppableId === 'list') {
      if (motives.slot1.length === 0) {
        addMotive('slot1', motiveId)
      } else if (motives.slot2.length === 0) {
        addMotive('slot2', motiveId)
      } else if (motives.slot3.length === 0) {
        addMotive('slot3', motiveId)
      }
    } else {
      const newMotives = { ...motives }
      newMotives[droppableId] = []
      newMotives.list.push(motiveId)
      setMotives(newMotives)
    }
  }

  function addMotive(slot, motiveId) {
    const newMotives = { ...motives }
    newMotives[slot] = [motiveId]
    const newMotivesList = [...motives.list].filter(
      (motive) => motive !== motiveId
    )
    newMotives.list = newMotivesList
    setMotives(newMotives)
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
    const sourceState = result.source.droppableId
    const destinationState = result.destination.droppableId

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
      (result.destination.droppableId === 'slot1' ||
        result.destination.droppableId === 'slot2' ||
        result.destination.droppableId === 'slot3') &&
      motives[destinationState].length !== 0
    ) {
      // if a user-motive slot is already filled, the previous motive needs to be returned to the motives list
      const newDestinationState = [motives[sourceState][result.source.index]]
      const newState = { ...motives }
      newState[destinationState] = newDestinationState
      const newSourceState = remove(motives[sourceState], result.source.index)
      newSourceState.push(motives[destinationState][0])
      newState[sourceState] = newSourceState
      setMotives(newState)
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

  return {
    onDragStart,
    onDragEnd,
    motives,
    questionnaireUrl,
    handleMotiveClick,
  }
}
