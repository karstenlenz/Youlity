import { render } from '@testing-library/react'
import React from 'react'
import QuestionnaireIntro from './QuestionnaireIntro'
import { BrowserRouter as Router } from 'react-router-dom'

describe('The QuestionnaireIntro component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Router>
        <QuestionnaireIntro />
      </Router>
    )
    expect(container).toMatchSnapshot()
  })
})
