import React from 'react'
import { useParams } from 'react-router-dom'
import QuestionnaireIntro from './QuestionnaireIntro'

export default function QuestionnaireIntroPage() {
  const { testIdParam } = useParams()

  return <QuestionnaireIntro testIdParam={testIdParam} />
}
