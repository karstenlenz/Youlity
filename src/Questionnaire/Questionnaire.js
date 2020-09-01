import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { styleData } from '../data/styleData'

Questionnaire.propTypes = {
  userStyles: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default function Questionnaire({ userStyles = [] }) {
  const history = useHistory()
  if (userStyles.length < 3) {
    history.push('/')
  }

  const currentTestId = userStyles[0] - 1
  const questions = styleData[currentTestId]?.questions ?? []
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])

  if (currentQuestionIndex < questions.length) {
    return (
      <>
        <h1>Fragebogen:</h1>
        <p>"{styleData[currentTestId].name}"</p>
        <h3>
          Frage {currentQuestionIndex + 1} / {questions.length}
        </h3>
        <h2>{questions[currentQuestionIndex]}</h2>
        <button onClick={() => handleAnswer(false)}>(Eher) Nein</button>
        <button onClick={() => handleAnswer(true)}>(Eher) Ja</button>
      </>
    )
  } else if (currentQuestionIndex === questions.length) {
    return <Redirect to="/" />
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
