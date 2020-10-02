import React from 'react'
import { render } from '@testing-library/react'
import useResult from './useResult'

describe.only('the useMotiveSelection custom hook', () => {
  function setup() {
    const returnVal = {}

    function TestComponent() {
      Object.assign(returnVal, useResult('192837465', '543'))
      return null
    }
    render(<TestComponent />)
    return returnVal
  }

  it.only('returns all the necessary variables and functions correctly', () => {
    const result = setup()
    expect(Array.isArray(result.sortedResultData)).toEqual(true)
    expect(Array.isArray(result.positiveStyleNames)).toEqual(true)
    expect(typeof result.NumberOfCompletedQuestionnaires).toEqual('number')
  })
})
