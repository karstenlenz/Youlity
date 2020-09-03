import React from 'react'
import Questionnaire from './Questionnaire'
import { useParams } from 'react-router-dom'

export default function QuestionnairePage() {
  const { testIdParam } = useParams()
  const testIds = testIdParam.split('')

  return <Questionnaire testIds={testIds} />
}
