import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import IconButton from './IconButton'

export default function Header() {
  const history = useHistory()

  return (
    <HeaderContainer>
      <IconButton
        imgUrl="/img/back.svg"
        altText="zurück"
        onClick={() => history.goBack()}
      />
      <img src="/img/logo.svg" alt="Youlity logo" />
      <IconButton
        imgUrl="/img/home.svg"
        altText="zur Homepage"
        onClick={() => history.push('/')}
      />
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  display: flex;
  height: 60px;
  width: 100vw;
  padding: 10px 15px;
  box-shadow: var(--primary-shadow);
`
