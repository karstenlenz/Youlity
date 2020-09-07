import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('The Button component', () => {
  it('renders correctly', () => {
    const { container } = render(<Button>Test-Text</Button>)
    expect(container).toMatchSnapshot()
  })

  it('display the text "Test-Text"', () => {
    render(<Button>Test-Text</Button>)
    expect(screen.getByText('Test-Text')).toBeInTheDocument()
  })
})
