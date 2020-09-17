import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Button from '../common/Button'
import HeadlineUnderline from '../common/HeadlineUnderline'
import { ReactComponent as ArrowLeft } from '../img/arrow_left.svg'
import { ReactComponent as ArrowRight } from '../img/arrow_right.svg'
import CardStack from './CardStack'

Questionnaire.propTypes = {
  questionSets: PropTypes.arrayOf(PropTypes.array).isRequired,
  handleResults: PropTypes.func.isRequired,
}

export default function Questionnaire({ questionSets, handleResults }) {
  const [questionRound, setQuestionRound] = useState(0)
  const questions = questionSets[questionRound] ?? []
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [results, setResults] = useState([])

  const [cardOffset, setCardOffset] = useState(0)
  const swipeThreshold = 50

  return (
    <>
      <HeadlineUnderline>
        <h1>
          Fragebogen {questionRound + 1} / {questionSets.length}
        </h1>
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
      if (questionRound === questionSets.length - 1) {
        handleResults([...results, countYes([...answers, answer])])
      } else {
        setResults([...results, countYes([...answers, answer])])
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
    props.borderColor && 'border: 2px solid ' + props.borderColor + ';'}
`
const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
