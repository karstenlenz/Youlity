import React from 'react'
import PersonalityStyleInfo from './PersonalityStyleInfo'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'personalityStyleInfo ',
  component: 'personalityStyleInfo',
}

export const personalityStyleInfoComponent = () => {
  return (
    <Router path="/style-info/1">
      <PersonalityStyleInfo />
    </Router>
  )
}
