import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Motives from './Motives'

export default {
  title: 'Motive Selection',
  component: Motives,
}

export const MotivesComponent = () => (
  <Router>
    <Motives />
  </Router>
)
