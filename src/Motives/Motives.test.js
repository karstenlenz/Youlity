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
  it('matches the narcissistic style', () => {
    const testMotives = [
      'Anerkennung',
      'Autonomie',
      'Solidarität',
      'Wichtigkeit',
    ]
    const result = evaluateMatchingStyles(testMotives)
    expect(result[0]).toEqual(1)
  })
})
