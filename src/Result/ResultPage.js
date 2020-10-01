import React from 'react'
import { useParams } from 'react-router-dom'
import Result from './Result'

export default function ResultPage() {
  const { questionnaireIds, results } = useParams()

  return <Result questionnaireIds={questionnaireIds} results={results} />
}
