import React from 'react'
import styled from 'styled-components/macro'
import { personalityStyleData } from '../data/personalityStyleData'

export default function ({ positiveStyles }) {
  if (!positiveStyles) return null

  return (
    <SmallH2>
      Sie sind{' '}
      {positiveStyles.map((style, index) => {
        return (
          <React.Fragment key={style.id}>
            {index === positiveStyles.length - 1 ? 'und ' : ''}
            <StyleInfoLink href={'/style-info/' + style.id}>
              {personalityStyleData[style.id - 1]?.adjective}
              {index === positiveStyles.length - 1 ? '.' : ', '}
            </StyleInfoLink>
          </React.Fragment>
        )
      })}{' '}
    </SmallH2>
  )
}

const SmallH2 = styled.h2`
  font-size: 1em;
  margin-top: 0;
  line-height: 1.5em;
`

const StyleInfoLink = styled.a`
  font-size: 1em;
  text-decoration: underline;
`
