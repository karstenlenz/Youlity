import React, { useState, useEffect } from 'react'
import { questionnaires } from '../data/questionnaires'

export default function Questionnaire() {
  const currentQuestionnaire = questionnaires[0]
  const { questions } = currentQuestionnaire
  const [answers, setAnswers] = useState([])
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0)
  const [result, setResult] = useState(0)

  useEffect(() => {
    setResult(countYes(answers))
  }, [answers])

  return (
    <>
      {currentQuestionIndex < questions.length ? (
        <>
          <h2>{questions[currentQuestionIndex]}</h2>
          <button onClick={handleAnswer} data-js="no">
            (Eher) Nein
          </button>
          <button onClick={handleAnswer} data-js="yes">
            (Eher) Ja
          </button>
        </>
      ) : (
        <>
          <h2>Ergebnis:</h2>
          <p>Sie haben {result} von 8 Fragen mit ja beantwortet.</p>
          {result > 5 ? (
            <p>
              Das deutet darauf hin, dass der narzistische Persönlichkeitsstil
              bei Ihnen überdurchschnittlich ausgeprägt ist. Keine Sorge, das
              ist nichts Schlimmes! Nur, wenn Sie das Gefühl haben, unter Ihrer
              Persönlichkeit zu leiden, sollten Sie Hilfe suchen.
            </p>
          ) : (
            <p>
              Das deutet nicht darauf hin, dass der narzistische
              Persönlichkeitsstil bei Ihnen überdurchschnittlich ausgeprägt ist.
            </p>
          )}
        </>
      )}
    </>
  )

  function handleAnswer(event) {
    const answer = event.target.dataset.js
    setAnswers([...answers, answer])
    setcurrentQuestionIndex(currentQuestionIndex + 1)
  }
}

export function countYes(answers) {
  return answers.reduce((yesCount, answer) => {
    return answer === 'yes' ? yesCount + 1 : yesCount
  }, 0)
}
