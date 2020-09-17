import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { personalityStyleData } from '../data/personalityStyleData'
import Questionnaire from './Questionnaire'

export default function QuestionnaireEntryPage() {
  const { questionnaireIds, results } = useParams()
  const testIds = questionnaireIds.split('').map((id) => parseInt(id))
  const firstTwoIds = testIds.slice(0, 2)
  const questionSets = firstTwoIds.map(
    (id) => personalityStyleData[id - 1].questions
  )
  const history = useHistory()

  return (
    <Questionnaire questionSets={questionSets} handleResults={handleResults} />
  )

  function handleResults(results) {
    const resultUrl = '/result/' + testIds.join('') + '/' + results.join('')
    history.push(resultUrl)
  }
}
