import React from 'react'
import { useParams } from 'react-router-dom'
import Questionnaire from './Questionnaire'

export default function QuestionnaireEntryPage() {
  const { testIdParam } = useParams()
  const testIds = testIdParam.split('').map((id) => parseInt(id))

  return <Questionnaire testIds={testIds} />
}
