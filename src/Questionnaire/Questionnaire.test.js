import { render } from '@testing-library/react'
import React from 'react'
import Questionnaire, { countYes } from './Questionnaire'

describe('The questionnaire component', () => {
  it('renders correctly', () => {
    const tree = render(<Questionnaire />)
    expect(tree).toMatchSnapshot()
  })
})

describe('countYes', () => {
  it('counts all the yesses', () => {
    const testAnswers = ['yes', 'yes', 'yes', 'yes', 'yes', 'yes', 'yes', 'yes']
    const result = countYes(testAnswers)
    expect(result).toEqual(8)
  })

  it('doesnt count all the noes', () => {
    const testAnswers = ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no']
    const result = countYes(testAnswers)
    expect(result).toEqual(0)
  })

  it('only counts the yesses', () => {
    const testAnswers = ['no', 'yes', 'no', 'yes', 'yes', 'no', 'no', 'no']
    const result = countYes(testAnswers)
    expect(result).toEqual(3)
  })
})
