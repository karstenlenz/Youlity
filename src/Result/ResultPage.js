import React from 'react'
import Result from './Result'
import { useParams } from 'react-router-dom'
import ExtendedResult from './ExtendedResult'

export default function ResultPage() {
  const { questionnaireIds, results } = useParams()

  return results.length > 2 ? (
    <ExtendedResult questionnaireIds={questionnaireIds} results={results} />
  ) : (
    <Result questionnaireIds={questionnaireIds} results={results} />
  )
}
