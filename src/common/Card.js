import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Card.propTypes = {
  children: PropTypes.any.isRequired,
}

export default function Card({ children }) {
  return <CardBG>{children}</CardBG>
}

const CardBG = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  background: white;
  border-radius: 12px;
  box-shadow: var(--primary-shadow);
  padding: 15px;
  margin: 30px 0;

  @media screen and (min-width: 750px) {
    padding: 15px 15px 60px 15px;
  }
`
