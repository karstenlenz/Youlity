import { render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

it('renders correctly', () => {
  const { container } = render(
    <Router>
      <App />
    </Router>
  )
  expect(container).toMatchSnapshot()
})
