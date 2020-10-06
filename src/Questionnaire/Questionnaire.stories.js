import React from 'react'
import Questionnaire from './Questionnaire'

export default {
  title: 'Questionnaire/QuestionnaireEntry',
  component: Questionnaire,
  argTypes: {
    questionSets: {
      control: {
        type: 'array',
      },
    },
    handleResults: {
      action: 'results',
    },
  },
}

export const QuestionnaireComponent = (args) => {
  return <Questionnaire {...args} />
}

QuestionnaireComponent.args = {
  questionSets: [
    ['Lorem ipsum?', 'Dolor sit?', 'Acquesitur et rudum?'],
    ['Dolor sit?', 'Lorem ipsum?', 'Acquesitur et rudum?'],
  ],
}
