import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useSwipeable, Swipeable } from 'react-swipeable'

export default function SwipeableCard({ children }) {
  const windowWidth = window.innerWidth

  const Card = styled.div`
    background: var(--light-grey);
    border: var(--dark-grey);
    height: 200px;
    ${(props) =>
      'position: relative; right:' +
      props.offset +
      'px;' +
      'transform: rotate(' +
      (0 - (props.offset / windowWidth) * 45) +
      'deg);'}
  `

  const [offset, setOffset] = useState(0)
  const swipeConfig = {
    delta: 1, // min distance(px) before a swipe starts
    preventDefaultTouchmoveEvent: true, // preventDefault on touchmove, *See Details*
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
  }

  const swipeHandlers = useSwipeable({
    onSwiped: (eventData) => {
      eventData.event.preventDefault()
      handleSwiped(eventData)
    },
    onSwiping: (eventData) => {
      eventData.event.preventDefault()
      handleSwiping(eventData)
    },
    ...swipeConfig,
  })

  function handleSwiped(eventData) {
    eventData.event.preventDefault()
    if (eventData.dir === 'Right') {
      console.log('rechts')
    } else {
      console.log('links')
    }
    setOffset(0)
  }

  function handleSwiping(eventData) {
    eventData.event.preventDefault()
    setOffset(eventData.deltaX)
  }

  return (
    <div {...swipeHandlers}>
      <Card offset={offset}>{children}</Card>
    </div>
  )
}
