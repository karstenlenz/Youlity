import React from 'react'
import styled, { keyframes } from 'styled-components/macro'

export default function ResultBar({ percentage, index }) {
  return (
    <Outline>
      <ColorBar percentage={percentage} index={index}>
        <Text>{percentage}% Übereinstimmung</Text>
      </ColorBar>
    </Outline>
  )
}

const Text = styled.p`
  margin: 0;
  padding: 8px 15px;
`

const Outline = styled.div`
  border: 1px solid var(--dark-grey);
  border-radius: 5px;
  width: 100%;
`

const expandWidth = (width) => keyframes`
from {
      width: 0;
    }
    to {
      width: ${width}%;
    }
`

const ColorBar = styled.div`
  animation: ${(props) => expandWidth(props.percentage)} 0.8s
    ${(props) => 0.4 + 0.2 * props.index}s forwards ease-in-out;
  white-space: nowrap;
  overflow: visible;
  border-radius: 5px;
  height: 40px;
  width: 0;
  background-color: ${(props) =>
    props.percentage > 50
      ? 'rgba(0,197,170,' + (props.percentage / 50 - 1) + ')'
      : 'rgba(104,59,137,' + props.percentage / 100 + ')'};
`
