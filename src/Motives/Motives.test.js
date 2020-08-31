import { render } from '@testing-library/react'
import React from 'react'
import Motives from './Motives'
import { evaluateMatchingStyles } from './util'

describe('The Motives component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Motives userMotives={[]} setUserMotives={() => true} />
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

  it('also matches the narcissistic style with mixed-up order', () => {
    const testMotives = [
      'Autonomie',
      'Anerkennung',
      'Wichtigkeit',
      'Solidarität',
    ]
    const result = evaluateMatchingStyles(testMotives)
    expect(result[0]).toEqual(1)
  })

  it('also matches the histrionic style with correct order', () => {
    const testMotives = ['Wichtigkeit', 'Solidarität', 'Verlässlichkeit']
    const result = evaluateMatchingStyles(testMotives)
    expect(result).toEqual([2, 6, 9, 1, 7, 4, 3, 5, 8])
  })
})
