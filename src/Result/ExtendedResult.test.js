import { render } from '@testing-library/react'
import React from 'react'
import ExtendedResult from './ExtendedResult'
import { BrowserRouter as Router } from 'react-router-dom'

describe('The ExtendedResult component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Router>
        <ExtendedResult questionnaireIds="1928373645" results="6422" />
      </Router>
    )
    expect(container).toMatchSnapshot()
  })
})
