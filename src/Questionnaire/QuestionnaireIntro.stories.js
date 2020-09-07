import React from 'react'
import QuestionnaireIntro from './QuestionnaireIntro'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'Questionnaire',
  component: QuestionnaireIntro,
}

export const QuestionnaireIntroComponent = () => (
  <Router>
    <QuestionnaireIntro />
  </Router>
)
