import React from 'react'
import Result from './Result'
import { useParams } from 'react-router-dom'

export default function ResultPage() {
  const { questionnaireIds, results } = useParams()
  const resultQuestionnaireIds = questionnaireIds.split('')
  const resultYesCounts = results.split('')
  const resultData = [
    { id: resultQuestionnaireIds[0], yesCount: resultYesCounts[0] },
    { id: resultQuestionnaireIds[1], yesCount: resultYesCounts[1] },
  ]

  return <Result resultData={resultData} />
}
