import { render } from '@testing-library/react'
import React from 'react'
import ResultBar from './ResultBar'

describe('The ResultBar component', () => {
  it('renders correctly', () => {
    const { container } = render(<ResultBar percentage={50} />)
    expect(container).toMatchSnapshot()
  })
})
