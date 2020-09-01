import { render } from '@testing-library/react'
import React from 'react'
import Result from './Result'
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ resultCode: '1&8&5&3' }),
}))

describe('The Result component', () => {
  it('renders correctly', () => {
    const { container } = render(<Result />)
    expect(container).toMatchSnapshot()
  })
})
