import React from 'react'
import { render } from '@testing-library/react'
import useModal from './useModal'

describe('the useModal custom hook', () => {
  function setup() {
    const returnVal = {}

    function TestComponent() {
      Object.assign(returnVal, useModal())
      return null
    }
    render(<TestComponent />)
    return returnVal
  }

  it('returns all the necessary variables and functions correctly', () => {
    const result = setup()
    expect(typeof result.isOverlayVisible).toEqual('boolean')
    expect(typeof result.toggleOverlay).toEqual('function')
  })
})
