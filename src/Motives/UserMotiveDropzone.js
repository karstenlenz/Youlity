import React from 'react'
import styled from 'styled-components'

export const UserMotiveDropzone = React.forwardRef(({ children }, ref) => (
  <DropzoneBG ref={ref}>{children}</DropzoneBG>
))

const DropzoneBG = styled.div`
  border: 1px dashed var(--dark-grey);
  /* padding: 30px 15px; */
  min-height: 60px;
  border-radius: 12px;
`
