import React from 'react'
import styled from 'styled-components/macro'

export default function TextLink({ children, href, className }) {
  return (
    <LinkStyled className={className} href={href}>
      {children}
    </LinkStyled>
  )
}

const LinkStyled = styled.a`
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  text-decoration: underline;
  color: black;
  display: inline-block;
`
