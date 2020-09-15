import React from 'react'
import { useSwipeable } from 'react-swipeable'
import styled from 'styled-components/macro'

import PropTypes from 'prop-types'

SwipeableCard.propTypes = {
  children: PropTypes.any,
  handleAnswer: PropTypes.func.isRequired,
  offset: PropTypes.number.isRequired,
  setOffset: PropTypes.func.isRequired,
  swipeThreshold: PropTypes.number.isRequired,
}

export default function SwipeableCard({
  children,
  handleAnswer,
  offset,
  setOffset,
  swipeThreshold,
}) {
  const windowWidth = window.innerWidth

  const swipeConfig = {
    delta: 1,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
    rotationAngle: 0,
  }

  const swipeHandlers = useSwipeable({
    onSwiped: (eventData) => {
      handleSwiped(eventData)
    },
    onSwiping: (eventData) => {
      handleSwiping(eventData)
    },
    ...swipeConfig,
  })

  function handleSwiped(eventData) {
    eventData.event.preventDefault()
    if (eventData.dir === 'Right' && offset < -swipeThreshold) {
      handleAnswer(true)
    } else if (eventData.dir === 'Left' && offset > swipeThreshold) {
      handleAnswer(false)
    }
    setOffset(0)
  }

  function handleSwiping(eventData) {
    eventData.event.preventDefault()
    setOffset(eventData.deltaX)
  }

  return (
    <div {...swipeHandlers}>
      <Card
        offset={offset}
        windowWidth={windowWidth}
        swipeThreshold={swipeThreshold}
      >
        {children}
      </Card>
    </div>
  )
}
const Card = styled.div`
  background: white;
  border: ${(props) => {
    if (
      props.offset <= props.swipeThreshold &&
      props.offset >= -props.swipeThreshold
    ) {
      return '3px solid transparent;'
    } else if (props.offset > props.swipeThreshold) {
      return `3px solid rgba(104, 59, 137, ${props.offset / props.windowWidth})`
    } else if (props.offset < -props.swipeThreshold) {
      return `3px solid rgba(0, 197, 170, ${-props.offset / props.windowWidth})`
    }
  }};
  border-radius: 12px;
  box-shadow: var(--primary-shadow);
  max-width: 72.5%;
  min-height: 200px;
  margin: 0 auto;
  padding: 20px;
  font-size: 1em;
  position: relative;
  ${(props) =>
    'right:' +
    props.offset +
    'px;' +
    'transform: rotate(' +
    (0 - (props.offset / props.windowWidth) * 45) +
    'deg);'}
`
