import React, { useState } from 'react'
import Questionnaire from './Questionnaire'
import { useParams } from 'react-router-dom'
import QuestionnaireIntro from './QuestionnaireIntro'

export default function QuestionnairePage() {
  const { testIdParam } = useParams()
  const testIdStrings = testIdParam.split('')
  const testIds = testIdStrings.map((id) => parseInt(id))
  const [phase, setPhase] = useState(1)

  if (phase === 1) {
    return <QuestionnaireIntro onButtonClick={startQuestionnaire} />
  } else {
    return <Questionnaire testIds={testIds} />
  }

  function startQuestionnaire() {
    setPhase(2)
  }
}
