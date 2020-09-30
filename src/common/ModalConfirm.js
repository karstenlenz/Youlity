import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components/macro'
import Button from './Button'
import IconButton from './IconButton'
import useModal from './useModal'

export default function ModalConfirm({ handleDelete, id }) {
  const { isOverlayVisible, toggleOverlay } = useModal()

  const appRoot = document.querySelector('#root')

  return (
    <>
      {ReactDOM.createPortal(
        <>
          {isOverlayVisible && (
            <>
              <OverLayBG onClick={toggleOverlay} />
              <OverlayContent>
                <IconButton onClick={toggleOverlay}>
                  <img alt="Dialog schließen" src="/img/close.svg" />
                </IconButton>
                <h3>Eintrag löschen</h3>
                <p>
                  Möchten Sie diesen Beitrag wirklich löschen? Gelöschte
                  Einträge können nicht wiederhergestellt werden
                </p>
                <ButtonPair>
                  <Button btnType="white" width="45" onClick={toggleOverlay}>
                    Abbrechen
                  </Button>
                  <Button width="45" onClick={() => handleDelete(id)}>
                    Ja
                  </Button>
                </ButtonPair>
              </OverlayContent>
            </>
          )}
        </>,
        appRoot
      )}
      <DeleteButton onClick={toggleOverlay}>
        <img alt="Eintrag löschen" src="/img/delete.svg" />
      </DeleteButton>
    </>
  )
}

const DeleteButton = styled(IconButton)`
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
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

const ButtonPair = styled.div`
  display: flex;
  justify-content: space-between;
`
