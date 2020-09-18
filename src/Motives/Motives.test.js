import { render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MotivesEntry from './MotivesEntry'
import { evaluateMatchingStyles } from './util'
import ReactDOM from 'react-dom'

describe('The Motives component', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element
    })
  })

  afterEach(() => {
    ReactDOM.createPortal.mockClear()
  })

  it('renders correctly', () => {
    const { container } = render(
      <Router>
        <div id="root">
          <MotivesEntry />
        </div>
      </Router>
    )
    expect(container).toMatchSnapshot()
  })
})

describe('evaluateStyles', () => {
  it('matches the narcissistic style with correct match', () => {
    const testMotives = [
      'Anerkennung',
      'Autonomie',
      'Solidarität',
      'Wichtigkeit',
    ]
    const result = evaluateMatchingStyles(testMotives)
    expect(result[0]).toEqual(1)
  })

  it('also matches the narcissistic style with mixed-up order in the top 3', () => {
    const testMotives = [
      'Autonomie',
      'Anerkennung',
      'Wichtigkeit',
      'Solidarität',
    ]
    const result = evaluateMatchingStyles(testMotives)
    expect(result.slice(0, 3)).toContain(1)
  })

  it('also matches the histrionic style with correct order', () => {
    const testMotives = ['Wichtigkeit', 'Solidarität', 'Verlässlichkeit']
    const result = evaluateMatchingStyles(testMotives)
    expect(result).toEqual([2, 6, 9, 1, 7, 4, 3, 5, 8])
  })
})
