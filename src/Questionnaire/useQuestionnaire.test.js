import React from 'react'
import { render } from '@testing-library/react'
import useQuestionnaire from './useQuestionnaire'

describe.only('the useMotiveSelection custom hook', () => {
  function setup() {
    const returnVal = {}

    function TestComponent() {
      Object.assign(
        returnVal,
        useQuestionnaire(
          [
            ['1?', '2?', '3?'],
            ['4?', '5?', '6?'],
          ],
          jest.fn
        )
      )
      return null
    }
    render(<TestComponent />)
    return returnVal
  }

  it.only('returns all the necessary variables and functions correctly', () => {
    const result = setup()
    expect(Array.isArray(result.questions)).toEqual(true)
    expect(typeof result.questionRound).toEqual('number')
    expect(typeof result.currentQuestionIndex).toEqual('number')
    expect(typeof result.isInputDisabled).toEqual('boolean')
    expect(typeof result.swipeThreshold).toEqual('number')
    expect(typeof result.cardOffset).toEqual('number')
    expect(typeof result.setCardOffset).toEqual('function')
    expect(typeof result.handleAnswer).toEqual('function')
  })
})
