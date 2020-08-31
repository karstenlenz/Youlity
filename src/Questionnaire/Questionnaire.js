import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { questionnaires } from '../data/questionnaires'

Questionnaire.propTypes = {
  userStyles: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default function Questionnaire({ userStyles = [1, 2, 3] }) {
  const currentTestId = userStyles[0]
  const { questions } = questionnaires[currentTestId]
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])

  if (currentQuestionIndex < questions.length) {
    return (
      <>
        <h1>Fragebogen:</h1>
        <p>"{questionnaires[currentTestId].name}"</p>
        <h3>
          Frage {currentQuestionIndex + 1} / {questions.length}{' '}
        </h3>
        <h2>{questions[currentQuestionIndex]}</h2>
        <button onClick={() => handleAnswer(false)}>(Eher) Nein</button>
        <button onClick={() => handleAnswer(true)}>(Eher) Ja</button>
      </>
    )
  } else {
    return (
      <>
        <h1>Fragebogen:</h1>
        <p>"{questionnaires[currentTestId].name}"</p>
        <h2>Ergebnis:</h2>
        <h3>
          Sie haben {countYes(answers)} von {questions.length} Fragen mit "ja"
          beantwortet.
        </h3>
        {countYes(answers) > 5 ? (
          <p>
            Das deutet darauf hin, dass
            {' ' + questionnaires[currentTestId].name + ' '}
            bei Ihnen überdurchschnittlich ausgeprägt ist.
            <br /> Keine Sorge, das ist nichts Schlimmes! Nur, wenn Sie das
            Gefühl haben, unter Ihrer Persönlichkeit zu leiden, sollten Sie
            Hilfe suchen.
          </p>
        ) : (
          <p>
            Das deutet nicht darauf hin, dass
            {' ' + questionnaires[currentTestId].name + ' '}bei Ihnen
            überdurchschnittlich ausgeprägt ist.
          </p>
        )}
      </>
    )
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
