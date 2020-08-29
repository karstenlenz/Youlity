import React from 'react'
import GlobalStyles from '../src/GlobalStyles'

export const decorators = [
  (Story) => (
    <React.Fragment>
      <GlobalStyles />
      <Story />
    </React.Fragment>
  ),
]
