import React from 'react'
import { render } from '@testing-library/react'
import { useMotiveSelection } from './useMotiveSelection'

describe('the useMotiveSelection custom hook', () => {
  function setup() {
    const returnVal = {}

    function TestComponent() {
      Object.assign(returnVal, useMotiveSelection())
      return null
    }
    render(<TestComponent />)
    return returnVal
  }

  it('returns all the necessary variables and functions correctly', () => {
    const result = setup()
    expect(typeof result.onDragStart).toEqual('function')
    expect(typeof result.onDragEnd).toEqual('function')
    expect(typeof result.questionnaireUrl).toEqual('string')
    expect(typeof result.motives).toEqual('object')
    expect(Array.isArray(result.motives.list)).toEqual(true)
    expect(typeof result.handleMotiveClick).toEqual('function')
  })
})
