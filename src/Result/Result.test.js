import { render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Result from './Result'

describe('The Result component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Router>
        <Result questionnaireIds="192837645" results="64" />
      </Router>
    )
    expect(container).toMatchSnapshot()
  })
})
