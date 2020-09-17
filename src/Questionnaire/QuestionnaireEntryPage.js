import React from 'react'
import { useParams } from 'react-router-dom'
import { personalityStyleData } from '../data/personalityStyleData'
import Questionnaire from './Questionnaire'

export default function QuestionnaireEntryPage() {
  const { questionnaireIds, results } = useParams()
  const testIds = questionnaireIds.split('').map((id) => parseInt(id))
  const questionSets = testIds.map(
    (id) => personalityStyleData[id - 1].questions
  )

  // const [resultUrl, setResultUrl] = useState(
  //   '/result/' + testIds.join('') + '/' + results
  // )
  // const history = useHistory()

  // useEffect(() => {
  //   questionRound === 2 && history.push(resultUrl)
  // }, [resultUrl, history, questionRound])

  return (
    <Questionnaire questionSets={questionSets} handleResults={handleResults} />
  )
}

function handleResults(results) {
  console.log(results)
}
