import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function NoticeBox({ children }) {
  const [isNoticeVisible, setIsNoticeVisible] = useState(true)

  return (
    <>
      {isNoticeVisible && (
        <SectionStyled>
          <CloseButton onClick={() => setIsNoticeVisible(false)}>
            <img alt="close overlay" src="/img/close.svg" />
          </CloseButton>
          {children}
        </SectionStyled>
      )}
    </>
  )
}

const SectionStyled = styled.section`
  background: white;
  box-shadow: var(--primary-shadow);
  border-radius: 10px;
  padding: 15px;
  position: relative;
  margin-bottom: 30px;
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
