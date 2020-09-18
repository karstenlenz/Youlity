import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'
import ReactDOM from 'react-dom'

export default function InfoOverlay({ children, className }) {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false)

  const appRoot = document.querySelector('#root')

  useEffect(() => {
    if (isOverlayVisible) {
      document.body.style.overflow = 'hidden'
    }
    return () => (document.body.style.overflow = 'unset')
  }, [isOverlayVisible])

  return (
    <>
      {ReactDOM.createPortal(
        <>
          {isOverlayVisible && (
            <>
              <OverLayBG onClick={toggleOverlay} />
              <OverlayContent>
                <button onClick={toggleOverlay}>
                  <img alt="close overlay" src="/img/close.svg" />
                </button>
                {children}
              </OverlayContent>
            </>
          )}
        </>,
        appRoot
      )}
      <InfoButton btnType="white" onClick={toggleOverlay} className={className}>
        i
      </InfoButton>
    </>
  )

  function toggleOverlay(event) {
    event.stopPropagation()
    setIsOverlayVisible(!isOverlayVisible)
  }
}

const InfoButton = styled(Button)`
  width: 40px;
  height: 40px;
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
  border-radius: 10px;
  background: white;
  z-index: var(--overlay-content);
  opacity: 1;
  padding: 15px;
  text-align: left;

  button {
    padding: 0;
    position: absolute;
    right: 10px;
    top: 10px;
    background: none;
    border: none;
  }
`
