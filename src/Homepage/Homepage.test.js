import { render } from '@testing-library/react'
import React from 'react'
import Homepage from './Homepage'

describe('The Homepage component', () => {
  it('renders correctly', () => {
    const { container } = render(<Homepage />)
    expect(container).toMatchSnapshot()
  })
})
