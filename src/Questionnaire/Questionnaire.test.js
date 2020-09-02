import { render } from '@testing-library/react'
import React from 'react'
import Questionnaire, { countYes } from './Questionnaire'

describe('The questionnaire component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Questionnaire
        userPersonalityStyleIds={[3, 7, 5]}
        onQuestionnaireEnd={jest.fn}
        round={0}
      />
    )
    expect(container).toMatchSnapshot()
  })
})

describe('countYes', () => {
  it('counts all the yesses', () => {
    const testAnswers = [true, true, true, true, true, true, true, true]
    const result = countYes(testAnswers)
    expect(result).toEqual(8)
  })

  it('doesnt count all the noes', () => {
    const testAnswers = [false, false, false, false, false, false, false, false]
    const result = countYes(testAnswers)
    expect(result).toEqual(0)
  })

  it('only counts the yesses', () => {
    const testAnswers = [false, true, false, true, true, false, false, false]
    const result = countYes(testAnswers)
    expect(result).toEqual(3)
  })
})
