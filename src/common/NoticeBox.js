import React, { useState } from 'react'
import styled from 'styled-components'

export default function NoticeBox({ children }) {
  const [isNoticeVisible, setIsNoticeVisible] = useState(true)

  return (
    <>
      {isNoticeVisible && (
        <SectionStyled>
          <button onClick={() => setIsNoticeVisible(false)}>
            <img alt="close overlay" src="/img/close.svg" />
          </button>
          {children}
        </SectionStyled>
      )}
    </>
  )
}

const SectionStyled = styled.section`
  background: white;
  box-shadow: var(--primary-shadow);
  border-radius: 5px;
  padding: 15px;
  position: relative;
  margin-bottom: 30px;

  button {
    padding: 0;
    position: absolute;
    right: 10px;
    top: 10px;
    background: none;
    border: none;
  }
`
