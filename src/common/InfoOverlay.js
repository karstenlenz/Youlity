import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'

export default function InfoOverlay({ children }) {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false)

  return (
    <>
      {isOverlayVisible && (
        <>
          <OverLayBG onClick={toggleOverlay} />
          <OverlayContent>
            <button onClick={toggleOverlay}>X</button>
            {children}
          </OverlayContent>
        </>
      )}

      <InfoButton btnType="white" onClick={toggleOverlay}>
        ?
      </InfoButton>
    </>
  )

  function toggleOverlay() {
    setIsOverlayVisible(!isOverlayVisible)
  }
}

const InfoButton = styled(Button)`
  width: 50px;
  height: 50px;
  margin-left: 30px;
`

const OverLayBG = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: var(--overlay-bg);
  width: 100vw;
  height: 100vh;
  background: var(--dark-grey);
  opacity: 0.5;
`

const OverlayContent = styled.section`
  position: fixed;
  top: 30px;
  left: 30px;
  right: 30px;
  background: var(--light-grey);
  z-index: var(--overlay-content);
  opacity: 1;
  border: 1px solid black;
  padding: 15px;

  button {
    font-size: 1.331em;
    position: absolute;
    right: 2px;
    top: 2px;
    background: none;
    border: none;
  }
`
