import React from 'react'
import styled from 'styled-components/macro'

export default function ResultBar({ percentage }) {
  return (
    <Outline>
      <ColorBar percentage={percentage}>{percentage}% Übereinstimmung</ColorBar>
    </Outline>
  )
}

const Outline = styled.div`
  border: 1px solid var(--dark-grey);
  border-radius: 5px;
  width: 100%;
  line-height: 0;
`

const ColorBar = styled.div`
  white-space: nowrap;
  overflow: visible;
  padding: 20px 20px;
  border-radius: 5px;
  height: 40px;
  width: ${(props) => props.percentage + '%'};
  background-color: ${(props) =>
    props.percentage > 50
      ? 'rgba(0,197,170,' + (props.percentage / 50 - 1) + ')'
      : 'rgba(104,59,137,' + props.percentage / 100 + ')'};
`
