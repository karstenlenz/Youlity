import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components/macro'
import Button from './Button'

export default function ModalConfirm({ handleDelete, id }) {
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
                <h3>Eintrag löschen</h3>
                <p>
                  Möchten Sie diesen Beitrag wirklich löschen? Gelöschte
                  Einträge können nicht wiederhergestellt werden
                </p>
                <ButtonPair>
                  <Button btnType="white" width="47.5" onClick={toggleOverlay}>
                    Abbrechen
                  </Button>
                  <Button width="47.5" onClick={handleDelete}>
                    Ja
                  </Button>
                </ButtonPair>
              </OverlayContent>
            </>
          )}
        </>,
        appRoot
      )}
      <DeleteButton btnType="white" onClick={toggleOverlay}>
        <img alt="Eintrag löschen" src="/img/delete.svg" />
      </DeleteButton>
    </>
  )

  function toggleOverlay(event) {
    event.stopPropagation()
    setIsOverlayVisible(!isOverlayVisible)
  }
}

const DeleteButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  background: none;
  border: none;
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
  border-radius: 10px;
  background: white;
  z-index: var(--overlay-content);
  opacity: 1;
  padding: 15px;
  text-align: left;
`
const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;
  position: absolute;
  right: 0px;
  top: 0px;
  background: none;
  border: none;
`
const ButtonPair = styled.div`
  display: flex;
  justify-content: space-between;
`
