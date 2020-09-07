import { render } from '@testing-library/react'
import React from 'react'
import MotivesIntro from './MotivesIntro'
import { BrowserRouter as Router } from 'react-router-dom'

describe('The MotivesIntro component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Router>
        <MotivesIntro />
      </Router>
    )
    expect(container).toMatchSnapshot()
  })
})
