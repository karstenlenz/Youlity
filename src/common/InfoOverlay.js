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
                <CloseButton onClick={toggleOverlay}>
                  <img alt="Dialog schließen" src="/img/close.svg" />
                </CloseButton>
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
  font-size: 18px;
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
  left: 15px;
  right: 15px;
  opacity: 1;
  border-radius: 10px;
  background: white;
  z-index: var(--overlay-content);
  text-align: left;
  padding: 15px;
  max-width: 600px;
`
const CloseButton = styled.button`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  padding: 0;
`
