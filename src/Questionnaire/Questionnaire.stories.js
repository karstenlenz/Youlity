import React from 'react'
import Questionnaire from './Questionnaire'

export default {
  title: 'Questionnaire',
  component: Questionnaire,
}

export const Narzissmus = () => {
  return (
    <Questionnaire
      userPersonalityStyleIds={[1, 2, 3]}
      onQuestionnaireEnd={() => true}
      round={1}
    />
  )
}
