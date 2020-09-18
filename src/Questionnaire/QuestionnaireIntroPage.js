import React from 'react'
import { useParams } from 'react-router-dom'
import QuestionnaireIntro from './QuestionnaireIntro'

export default function QuestionnaireIntroPage() {
  const { questionnaireIds, results } = useParams()

  return (
    <QuestionnaireIntro questionnaireIds={questionnaireIds} result={results} />
  )
}
