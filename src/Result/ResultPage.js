import React from 'react'
import Result from './Result'
import { useParams } from 'react-router-dom'

export default function ResultPage() {
  const { questionnaireIds, results } = useParams()

  return results.length > 2 ? (
    <h1>Insert extended result page here</h1>
  ) : (
    <Result results={results} questionnaireIds={questionnaireIds} />
  )
}
