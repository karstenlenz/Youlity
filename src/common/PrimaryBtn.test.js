import React from 'react'
import { render, screen } from '@testing-library/react'
import PrimaryBtn from './PrimaryBtn'

describe('The PrimaryBtn component', () => {
  it('renders correctly', () => {
    const { container } = render(<PrimaryBtn>Test-Text</PrimaryBtn>)
    expect(container).toMatchSnapshot()
  })

  it('display the text "Test-Text"', () => {
    render(<PrimaryBtn>Test-Text</PrimaryBtn>)
    expect(screen.getByText('Test-Text')).toBeInTheDocument()
  })
})
