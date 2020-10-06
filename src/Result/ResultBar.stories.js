import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ResultBar from './ResultBar'

export default {
  title: 'Result/ResultBar',
  component: ResultBar,
  argTypes: {
    percentage: {
      control: {
        type: 'number',
      },
    },
    index: {
      control: {
        type: 'number',
      },
    },
  },
}

export const ResultBarComponent = (args) => (
  <Router>
    <ResultBar {...args} />
  </Router>
)
ResultBarComponent.args = {
  percentage: 50,
  index: 1,
}
