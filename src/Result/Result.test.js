import { render } from '@testing-library/react'
import React from 'react'
import Result from './Result'

describe('The Result component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Result
        resultData={[
          { id: 5, yesCount: 8 },
          { id: 3, yesCount: 4 },
        ]}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
