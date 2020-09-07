import React from 'react'
import styled from 'styled-components'

export default function BulletList({ listType = 'bullet_circle' }) {
  return (
    <ListContainer>
      <li></li>
    </ListContainer>
  )
}

const ListContainer = styled.ul`
  list-style-image: ${(props) => 'url(/img/' + props.listType + '.svg)'};
`
