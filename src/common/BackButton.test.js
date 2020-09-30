import { render } from '@testing-library/react'
import React from 'react'
import BackButton from './BackButton'

describe('The BackButton component', () => {
  it('renders correctly', () => {
    const { container } = render(<BackButton />)
    expect(container).toMatchSnapshot()
  })
})
