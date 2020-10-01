import React from 'react'
import styled from 'styled-components/macro'

export const UserMotiveDropzone = React.forwardRef(
  ({ children, isDraggingOver }, ref) => (
    <DropzoneBG isDraggingOver={isDraggingOver} ref={ref}>
      {children}
    </DropzoneBG>
  )
)

const DropzoneBG = styled.div`
  position: relative;
  border: 1px dashed var(--medium-grey);
  border-radius: 12px;
  background: ${(props) =>
    props.isDraggingOver ? 'var(--light-grey)' : 'white'};
  min-height: 60px;

  &:nth-child(1):before {
    font-family: 'Ubuntu', sans-serif;
    content: '1';
    color: var(--medium-grey);
    position: absolute;
    top: 32%;
    left: 47.5%;
    text-align: center;
  }
  &:nth-child(2):before {
    font-family: 'Ubuntu', sans-serif;
    content: '2';
    color: var(--medium-grey);
    position: absolute;
    top: 32%;
    left: 47.5%;
    text-align: center;
  }
  &:nth-child(3):before {
    font-family: 'Ubuntu', sans-serif;
    content: '3';
    color: var(--medium-grey);
    position: absolute;
    top: 32%;
    left: 47.5%;
    text-align: center;
  }
`
