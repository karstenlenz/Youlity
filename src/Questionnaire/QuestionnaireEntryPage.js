import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { personalityStyleData } from '../data/personalityStyleData'
import Questionnaire from './Questionnaire'

export default function QuestionnaireEntryPage() {
  const { questionnaireIds, results } = useParams()
  const previousResults = results
  const testIds = questionnaireIds.split('').map((id) => parseInt(id))
  const firstTwoIds = testIds.slice(0, 2)
  const first2QuestionSets = firstTwoIds.map(
    (id) => personalityStyleData[id - 1].questions
  )
  const nextQuestionSet = results
    ? [personalityStyleData[testIds[results.length] - 1].questions]
    : []
  const history = useHistory()

  return results?.length > 0 ? (
    <Questionnaire
      questionSets={nextQuestionSet}
      handleResults={handleResults}
    />
  ) : (
    <Questionnaire
      questionSets={first2QuestionSets}
      handleResults={handleResults}
    />
  )

  function handleResults(results) {
    const resultUrl =
      '/result/' +
      testIds.join('') +
      '/' +
      (previousResults ? previousResults : '') +
      results.join('')
    history.push(resultUrl)
  }
}
