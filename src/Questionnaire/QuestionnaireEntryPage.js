import React from 'react'
import { useParams } from 'react-router-dom'
import Questionnaire from './Questionnaire'

export default function QuestionnaireEntryPage() {
  const { questionnaireIds, results } = useParams()
  const testIds = questionnaireIds.split('').map((id) => parseInt(id))

  return <Questionnaire testIds={testIds} results={results} />
}
