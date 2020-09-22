import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Collapse from './Collapse'

describe('The Collapse component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Router>
        <Collapse headline="test Headline" headlineOpen="collapse is open">
          Collapse content lorem ipsum
        </Collapse>
      </Router>
    )
    expect(container).toMatchSnapshot()
  })

  it('hides the content at first', () => {
    render(
      <Router>
        <Collapse headline="test Headline" headlineOpen="collapse is open">
          Collapse content
        </Collapse>
      </Router>
    )
    expect(screen.queryByText('Collapse content')).not.toBeVisible()
  })

  it('shows the content after a click', () => {
    render(
      <Router>
        <Collapse headline="test Headline" headlineOpen="collapse is open">
          Collapse content
        </Collapse>
      </Router>
    )

    screen.getByText('test Headline').click()
    expect(screen.getByText('Collapse content')).toBeVisible()
  })
})
