import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { personalityStyleData } from '../data/personalityStyleData'
import HeadlineUnderline from '../common/HeadlineUnderline'
import Button from '../common/Button'
import styled from 'styled-components/macro'
import CardStack from './CardStack'
import PropTypes from 'prop-types'

import { ReactComponent as ArrowLeft } from '../img/arrow_left.svg'
import { ReactComponent as ArrowRight } from '../img/arrow_right.svg'

Questionnaire.propTypes = {
  testIds: PropTypes.number.isRequired,
}

export default function Questionnaire({ testIds }) {
  const history = useHistory()

  const [questionRound, setQuestionRound] = useState(0)
  const currentTestIndex = testIds[questionRound] - 1
  const questions = personalityStyleData[currentTestIndex]?.questions ?? []
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [resultUrl, setResultUrl] = useState('/result/')

  const [cardOffset, setCardOffset] = useState(0)
  const swipeThreshold = 50

  useEffect(() => {
    resultUrl.length === 12 && history.push(resultUrl)
  }, [resultUrl, history])

  return (
    <>
      <img alt="" src="/img/questionnaire-intro.svg" />
      <HeadlineUnderline>
        <h1>Fragebogen {questionRound + 1} / 2</h1>
      </HeadlineUnderline>
      <H2Styled>
        Frage {currentQuestionIndex + 1} / {questions.length}
      </H2Styled>
      <CardStack
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
        handleAnswer={handleAnswer}
        offset={cardOffset}
        setOffset={setCardOffset}
        swipeThreshold={swipeThreshold}
      ></CardStack>
      <ArrowContainer>
        <ArrowLeft />
        <ArrowRight />
      </ArrowContainer>
      <ButtonRow>
        <QuestionnaireButton
          btnType="white"
          width="47.5"
          onClick={() => handleAnswer(false)}
          borderColor={cardOffset > swipeThreshold && 'var(--primary)'}
          isButtonDisabled={cardOffset < -swipeThreshold}
        >
          (Eher) Nein
        </QuestionnaireButton>
        <QuestionnaireButton
          btnType="white"
          width="47.5"
          onClick={() => handleAnswer(true)}
          borderColor={cardOffset < -swipeThreshold && 'var(--secondary)'}
          isButtonDisabled={cardOffset > swipeThreshold}
        >
          (Eher) Ja
        </QuestionnaireButton>
      </ButtonRow>
    </>
  )

  function handleAnswer(answer) {
    if (currentQuestionIndex === questions.length - 1) {
      setResultUrl(
        resultUrl + (currentTestIndex + 1) + countYes([...answers, answer])
      )
      if (questionRound !== 1) {
        setQuestionRound(questionRound + 1)
        setCurrentQuestionIndex(0)
        setAnswers([])
      }
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

const H2Styled = styled.h2`
  margin-top: -10px;
`
const QuestionnaireButton = styled(Button)`
  ${(props) =>
    props.borderColor ? 'border: 2px solid ' + props.borderColor + ';' : ''}
`
const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
