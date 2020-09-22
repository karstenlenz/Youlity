import { render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'

describe('The Header component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Router>
        <Header>Header content lorem ipsum</Header>
      </Router>
    )
    expect(container).toMatchSnapshot()
  })
})
