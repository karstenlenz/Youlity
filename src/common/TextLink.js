import React from 'react'
import styled from 'styled-components'

export default function TextLink({ children, href }) {
  return <LinkStyled href={href}>{children}</LinkStyled>
}

const LinkStyled = styled.a`
  text-decoration: underline;
  color: var(--primary);
`
