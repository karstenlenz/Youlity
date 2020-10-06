import React from 'react'
import MotivesIntro from './MotivesIntro'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'Motives/Motives Intro',
  component: MotivesIntro,
}

export const MotivesIntroComponent = () => (
  <Router>
    <MotivesIntro />
  </Router>
)
