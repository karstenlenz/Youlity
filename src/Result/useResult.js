import { personalityStyleData } from '../data/personalityStyleData'

export default function useResult(questionnaireIds, results) {
  const resultQuestionnaireIds = questionnaireIds.split('')
  const resultYesCounts = results.split('')
  const resultData = []
  resultQuestionnaireIds.forEach((id, index) => {
    resultData.push({ id: id, yesCount: resultYesCounts[index] || null })
  })
  const sortedResultData = resultData
    .slice()
    .sort((a, b) => b.yesCount - a.yesCount)

  const positiveStyles = resultData
    .slice()
    .filter((result) => result.yesCount > 4)
  const positiveStyleNames = positiveStyles.map(
    (style) => personalityStyleData[style.id - 1]?.adjective
  )
  const NumberOfCompletedQuestionnaires = resultYesCounts.length

  return {
    sortedResultData,
    positiveStyles,
    positiveStyleNames,
    NumberOfCompletedQuestionnaires,
  }
}
