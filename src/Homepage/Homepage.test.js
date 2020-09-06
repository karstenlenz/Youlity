import { render } from '@testing-library/react'
import React from 'react'
import Homepage from './Homepage'
import { BrowserRouter as Router } from 'react-router-dom'

describe('The Homepage component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Router>
        <Homepage />
      </Router>
    )
    expect(container).toMatchSnapshot()
  })
})
