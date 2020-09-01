import React from 'react'
import Questionnaire from './Questionnaire'

export default {
  title: 'Questionnaire',
  component: Questionnaire,
}

export const Narzissmus = () => {
  return (
    <Questionnaire
      userStyles={[1, 2, 3]}
      onQuestionnaireEnd={() => true}
      round={1}
    />
  )
}
