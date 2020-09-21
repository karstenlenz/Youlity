import React from 'react'
import styled from 'styled-components/macro'

export default function JournalCard({
  date,
  title,
  description,
  id,
  handleDelete,
}) {
  return (
    <CardContainer>
      <DeleteButton onClick={() => handleDelete(id)}>
        <img alt="close overlay" src="/img/delete.svg" />
      </DeleteButton>
      <CardDate>{date}</CardDate>
      <CardTitle>{title}</CardTitle>
      <p>{description}</p>
    </CardContainer>
  )
}

const CardContainer = styled.section`
  position: relative;
  padding: 15px;
  box-shadow: var(--primary-shadow);
  border-radius: 12px;
  margin-bottom: 40px;
`
const CardDate = styled.h3`
  margin-top: 0;
  text-align: left;
`
const CardTitle = styled.h2`
  margin-top: 0;
  text-align: left;
`

const DeleteButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  background: none;
  border: none;
`
