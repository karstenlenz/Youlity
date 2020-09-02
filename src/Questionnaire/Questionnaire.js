import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { personalityStyleData } from '../data/personalityStyleData'

Questionnaire.propTypes = {
  userPersonalityStyleIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  onQuestionnaireEnd: PropTypes.func.isRequired,
  round: PropTypes.number.isRequired,
}

export default function Questionnaire({
  userPersonalityStyleIds = [],
  onQuestionnaireEnd,
  round,
}) {
  const history = useHistory()
  if (userPersonalityStyleIds.length < 3) {
    history.push('/')
  }

  const currentTestId = userPersonalityStyleIds[round - 1] - 1
  const questions = personalityStyleData[currentTestId]?.questions ?? [
    'Brauchen Sie in hohem Maße Lob und Anerkennung?',
    'Möchten Sie besser sein als andere?',
    'Reagieren Sie empfindlich auf Kritik, selbst wenn diese berechtigt ist?',
    'Haben Sie ab und zu Phasen, in denen Sie an Ihren Fähigkeiten, Erfolgen etc. zweifeln?',
    'Erleben Sie Phasen, in denen Sie sehr zufrieden mit sich sind und denken, dass Sie gut sind?',
    'Haben Sie die Tendenz, in besonderer Weise behandelt werden zu wollen?',
    'Haben Sie deutliche Erwartungen, an die sich andere halten sollten, z. B. Sie nicht zu behindern u. a.?',
    'Neigen Sie dazu, andere Personen „einzuspannen“, ihnen Aufgaben zu geben, die Sie eigentlich selbst erledigen sollten?',
  ]
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])

  if (currentQuestionIndex < questions.length) {
    return (
      <>
        <h1>Fragebogen {round} / 2</h1>
        <p>"{personalityStyleData[currentTestId]?.name}"</p>
        <h3>
          Frage {currentQuestionIndex + 1} / {questions.length}
        </h3>
        <h2>{questions[currentQuestionIndex]}</h2>
        <button onClick={() => handleAnswer(false)}>(Eher) Nein</button>
        <button onClick={() => handleAnswer(true)}>(Eher) Ja</button>
      </>
    )
  } else if (currentQuestionIndex === questions.length) {
    onQuestionnaireEnd(currentTestId + 1, countYes(answers))
    setCurrentQuestionIndex(0)
    setAnswers([])
    return <div></div>
  }

  function handleAnswer(answer) {
    setAnswers([...answers, answer])
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }
}

export function countYes(answers) {
  return answers.reduce((yesCount, answer) => {
    return answer ? yesCount + 1 : yesCount
  }, 0)
}
