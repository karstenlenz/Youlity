import React from 'react'
import { Link, useHistory } from 'react-router-dom'
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
      <Link to="/">
        <img src="/img/logo.svg" alt="Youlity logo" />
      </Link>
      <IconButton
        imgUrl="/img/home.svg"
        altText="zur Homepage"
        onClick={() => history.push('/')}
      />
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  height: 60px;
  width: 100%;
  padding: 10px 15px;
  box-shadow: var(--primary-shadow);
  button:nth-child(3) {
    justify-self: end;
  }
`
