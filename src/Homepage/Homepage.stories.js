import React from 'react'
import Homepage from './Homepage'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'Homepage',
  component: Homepage,
}

export const HomepageComponent = () => (
  <Router>
    <Homepage />
  </Router>
)
