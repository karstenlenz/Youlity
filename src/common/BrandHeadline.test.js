import { render } from '@testing-library/react'
import React from 'react'
import BrandHeadline from './BrandHeadline'

describe('The BrandHeadline component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <BrandHeadline firstWord="first" secondWord="second" />
    )
    expect(container).toMatchSnapshot()
  })
})
