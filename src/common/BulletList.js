import React from 'react'
import styled from 'styled-components'

export default function BulletList({ children, listType = 'bullet_circle' }) {
  return <ListContainer listType={listType}>{children}</ListContainer>
}

const ListContainer = styled.ul`
  padding: 0;
  margin: 0 0 30px 0;

  li {
    list-style: none;
    background: ${(props) =>
      'url(/img/' + props.listType + '.svg) no-repeat left top;'};
    padding: 0px 0px 3px 27px;
    margin-bottom: 18px;
  }

  h3 {
    margin: 0 0 0 0;
    text-align: left;
  }

  p {
    margin: 12px 0 0 0;
  }
`
