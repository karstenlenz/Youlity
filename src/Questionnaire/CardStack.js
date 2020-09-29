import React from 'react'
import styled from 'styled-components/macro'
import SwipeableCard from './SwipeableCard'
import PropTypes from 'prop-types'

CardStack.propTypes = {
  questions: PropTypes.array.isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  handleAnswer: PropTypes.func.isRequired,
  offset: PropTypes.number.isRequired,
  setOffset: PropTypes.func.isRequired,
  swipeThreshold: PropTypes.number.isRequired,
}

export default function CardStack({
  questions,
  currentQuestionIndex,
  handleAnswer,
  offset,
  setOffset,
  swipeThreshold,
}) {
  return (
    <CardStackContainer>
      <BackgroundCardsContainer>
        {questions[currentQuestionIndex + 2] && (
          <Card scale={0.9} top="-25px" brightness="96%" zIndex="1">
            {questions[currentQuestionIndex + 2]}
          </Card>
        )}
        {questions[currentQuestionIndex + 1] && (
          <Card scale={0.95} top="-15px" brightness="98%" zIndex="2">
            {questions[currentQuestionIndex + 1]}
          </Card>
        )}
      </BackgroundCardsContainer>
      <SwipeableCard
        handleAnswer={handleAnswer}
        offset={offset}
        setOffset={setOffset}
        swipeThreshold={swipeThreshold}
      >
        {questions[currentQuestionIndex]}
      </SwipeableCard>
    </CardStackContainer>
  )
}

const CardStackContainer = styled.div`
  position: relative;
  height: 200px;
`
const BackgroundCardsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: var(--primary-shadow);
  width: 100%;
  max-width: 72.5%;
  min-height: 200px;
  margin: auto;
  padding: 20px;
  font-size: 1em;
  position: absolute;
  left: 50%;
  transform: ${(props) => 'translateX(-50%) scale(' + props.scale + ');'};
  top: ${(props) => props.top};
  z-index: ${(props) => props.zIndex};
  filter: brightness(${(props) => props.brightness});
`
