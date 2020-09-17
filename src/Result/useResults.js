export default function useResults(questionnaireIds, results) {
  const resultQuestionnaireIds = questionnaireIds.split('')
  const resultYesCounts = results.split('')
  const resultData = []
  resultYesCounts.forEach((yesCount, index) => {
    resultData.push({ id: resultQuestionnaireIds[index], yesCount: yesCount })
  })

  return resultData
}
