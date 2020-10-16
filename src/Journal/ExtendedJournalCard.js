import React from 'react'
import styled from 'styled-components/macro'
import ModalConfirm from '../common/ModalConfirm'

ExtendedJournalCard.propTypes = {}

export default function ExtendedJournalCard({
  date,
  id,
  when,
  what,
  who,
  think,
  feel,
  doWhat,
  consequence,
  otherPeople,
  agreement,
  doDifferent,
  howChange,
  learn,
  cause,
  handleDelete,
}) {
  return (
    <CardContainer>
      <ModalConfirm handleDelete={handleDelete} id={id} />
      <CardDate>{date}</CardDate>
      <Paragraph>{when}</Paragraph>
      <Paragraph>{what}</Paragraph>
      <Paragraph>{who}</Paragraph>
      <Paragraph>{think}</Paragraph>
      <Paragraph>{feel}</Paragraph>
      <Paragraph>{doWhat}</Paragraph>
      <Paragraph>{consequence}</Paragraph>
      <Paragraph>{otherPeople}</Paragraph>
      <Paragraph>{agreement}</Paragraph>
      <Paragraph>{doDifferent}</Paragraph>
      <Paragraph>{howChange}</Paragraph>
      <Paragraph>{learn}</Paragraph>
      <Paragraph>{cause}</Paragraph>
    </CardContainer>
  )
}

const CardContainer = styled.section`
  position: relative;
  box-shadow: var(--primary-shadow);
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 40px;
`
const CardDate = styled.h3`
  margin-top: 0;
  text-align: left;
`

const Paragraph = styled.p`
  margin-bottom: 10px;
`
