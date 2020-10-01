import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

TextLink.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
}

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
