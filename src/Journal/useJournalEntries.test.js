import React from 'react'
import { render } from '@testing-library/react'
import useJournalEntries from './useJournalEntries'

describe('the useJournalEntries custom hook', () => {
  function setup() {
    const returnVal = {}

    function TestComponent() {
      Object.assign(returnVal, useJournalEntries())
      return null
    }
    render(<TestComponent />)
    return returnVal
  }

  it('returns all the necessary variables and functions correctly', () => {
    const result = setup()
    expect(Array.isArray(result.journalEntries)).toEqual(true)
    expect(typeof result.setJournalEntries).toEqual('function')
    expect(typeof result.createJournalEntry).toEqual('function')
    expect(typeof result.deleteJournalEntry).toEqual('function')
  })
})
