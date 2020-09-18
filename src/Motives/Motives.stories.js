import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MotivesEntry from './MotivesEntry'

export default {
  title: 'Motive Selection',
  component: MotivesEntry,
}

export const MotivesEntryComponent = () => (
  <Router>
    <MotivesEntry />
  </Router>
)
