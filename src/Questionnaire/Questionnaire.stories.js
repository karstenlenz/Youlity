import React from 'react'
import Questionnaire from './Questionnaire'

export default {
  title: 'Questionnaire',
  component: Questionnaire,
}

export const NarzisstischDependent = () => {
  return <Questionnaire testIds={[1, 4, 3, 6]} />
}
