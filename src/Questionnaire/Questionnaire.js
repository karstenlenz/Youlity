import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import Button from '../common/Button'
import HeadlineUnderline from '../common/HeadlineUnderline'
import { ReactComponent as ArrowLeft } from '../img/arrow_left.svg'
import { ReactComponent as ArrowRight } from '../img/arrow_right.svg'
import CardStack from './CardStack'
import useQuestionnaire from './useQuestionnaire'

Questionnaire.propTypes = {
  questionSets: PropTypes.arrayOf(PropTypes.array).isRequired,
  handleResults: PropTypes.func.isRequired,
}

export default function Questionnaire({ questionSets, handleResults }) {
  const {
    questions,
    questionRound,
    currentQuestionIndex,
    isInputDisabled,
    swipeThreshold,
    cardOffset,
    setCardOffset,
    handleAnswer,
  } = useQuestionnaire(questionSets, handleResults)

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
          isButtonDisabled={cardOffset < -swipeThreshold || isInputDisabled}
        >
          (Eher) Nein
        </QuestionnaireButton>
        <QuestionnaireButton
          btnType="white"
          width="47.5"
          onClick={() => handleAnswer(true)}
          borderColor={cardOffset < -swipeThreshold && 'var(--secondary)'}
          isButtonDisabled={cardOffset > swipeThreshold || isInputDisabled}
        >
          (Eher) Ja
        </QuestionnaireButton>
      </ButtonRow>
    </>
  )
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
