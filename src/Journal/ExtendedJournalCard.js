import React from 'react'
import styled from 'styled-components/macro'
import ModalConfirm from '../common/ModalConfirm'
import useExtendedJournalForm from './useExtendedJournalForm'

ExtendedJournalCard.propTypes = {}

export default function ExtendedJournalCard({
  date,
  id,
  title,
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
  const { journalQuestions } = useExtendedJournalForm()
  const headlines = Object.values(journalQuestions)

  return (
    <CardContainer>
      <ModalConfirm handleDelete={handleDelete} id={id} />
      <CardDate>{date}</CardDate>
      <CardTitle>{title}</CardTitle>
      <CardH4>{headlines[1]}</CardH4>
      <Paragraph>{when}</Paragraph>
      <CardH4>{headlines[2]}</CardH4>
      <Paragraph>{what}</Paragraph>
      <CardH4>{headlines[3]}</CardH4>
      <Paragraph>{who}</Paragraph>
      <CardH4>{headlines[4]}</CardH4>
      <Paragraph>{think}</Paragraph>
      <CardH4>{headlines[5]}</CardH4>
      <Paragraph>{feel}</Paragraph>
      <CardH4>{headlines[6]}</CardH4>
      <Paragraph>{doWhat}</Paragraph>
      <CardH4>{headlines[7]}</CardH4>
      <Paragraph>{consequence}</Paragraph>
      <CardH4>{headlines[8]}</CardH4>
      <Paragraph>{otherPeople}</Paragraph>
      <CardH4>{headlines[9]}</CardH4>
      <Paragraph>{agreement}</Paragraph>
      <CardH4>{headlines[10]}</CardH4>
      <Paragraph>{doDifferent}</Paragraph>
      <CardH4>{headlines[11]}</CardH4>
      <Paragraph>{howChange}</Paragraph>
      <CardH4>{headlines[12]}</CardH4>
      <Paragraph>{learn}</Paragraph>
      <CardH4>{headlines[13]}</CardH4>
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
const CardTitle = styled.h2`
  margin-top: 0;
  text-align: left;
`
const CardH4 = styled.h4`
  font-family: 'Cabin', sans-serif;
  font-size: 1em;
  margin-top: 0;
  margin-bottom: 5px;
  text-align: left;
`

const Paragraph = styled.p`
  margin-bottom: 10px;
`
