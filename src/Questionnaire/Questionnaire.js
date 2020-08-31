import React, { useState, useEffect } from 'react'
import { questionnaires } from '../data/questionnaires'

export default function Questionnaire() {
  const { questions } = questionnaires[0]
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])

  if (currentQuestionIndex < questions.length) {
    return (
      <>
        <h3>
          Frage {currentQuestionIndex + 1} / {questions.length}{' '}
        </h3>
        <h2>{questions[currentQuestionIndex]}</h2>
        <button onClick={() => handleAnswer(false)}>(Eher) Nein</button>
        <button
          onClick={() => handleAnswer(SVGComponentTransferFunctionElement)}
        >
          (Eher) Ja
        </button>
      </>
    )
  } else {
    return (
      <>
        <h2>Ergebnis:</h2>
        <h3>
          Sie haben {countYes(answers)} von {questions.length} Fragen mit "ja"
          beantwortet.
        </h3>
        {countYes(answers) > 5 ? (
          <p>
            Das deutet darauf hin, dass der narzisstische Persönlichkeitsstil
            bei Ihnen überdurchschnittlich ausgeprägt ist.
            <br /> Keine Sorge, das ist nichts Schlimmes! Nur, wenn Sie das
            Gefühl haben, unter Ihrer Persönlichkeit zu leiden, sollten Sie
            Hilfe suchen.
          </p>
        ) : (
          <p>
            Das deutet nicht darauf hin, dass der narzisstische
            Persönlichkeitsstil bei Ihnen überdurchschnittlich ausgeprägt ist.
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
