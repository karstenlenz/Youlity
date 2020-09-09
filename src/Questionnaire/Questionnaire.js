import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { personalityStyleData } from '../data/personalityStyleData'
import HeadlineUnderline from '../common/HeadlineUnderline'
import Button from '../common/Button'
import styled from 'styled-components/macro'

export default function Questionnaire({ testIds }) {
  const history = useHistory()

  const [questionRound, setQuestionRound] = useState(0)
  const currentTestIndex = testIds[questionRound] - 1
  const questions = personalityStyleData[currentTestIndex]?.questions ?? []
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [resultUrl, setResultUrl] = useState('/result/')

  useEffect(() => {
    questionRound === 2 && history.push(resultUrl)
  }, [questionRound, resultUrl, history])

  return (
    <>
      <img alt="" src="/img/questionnaire-intro.svg" />
      <HeadlineUnderline>
        <h1>Fragebogen {questionRound + 1} / 2</h1>
      </HeadlineUnderline>
      <h2>
        Frage {currentQuestionIndex + 1} / {questions.length}
      </h2>
      <h3>{questions[currentQuestionIndex]}</h3>

      <ButtonRow>
        <Button
          btnType="white"
          width="47.5"
          onClick={() => handleAnswer(false)}
        >
          (Eher) Nein
        </Button>
        <Button btnType="white" width="47.5" onClick={() => handleAnswer(true)}>
          (Eher) Ja
        </Button>
      </ButtonRow>
    </>
  )

  function handleAnswer(answer) {
    if (currentQuestionIndex === questions.length - 1) {
      setQuestionRound(questionRound + 1)
      setResultUrl(
        resultUrl + (currentTestIndex + 1) + countYes([...answers, answer])
      )
      setCurrentQuestionIndex(0)
      setAnswers([])
    } else {
      setAnswers([...answers, answer])
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }
}

export function countYes(answers) {
  return answers.reduce((yesCount, answer) => {
    return answer ? yesCount + 1 : yesCount
  }, 0)
}

const ButtonRow = styled.section`
  display: flex;
  justify-content: space-between;
`
