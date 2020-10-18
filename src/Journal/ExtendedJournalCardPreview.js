import React from 'react'
import styled from 'styled-components/macro'
import ModalConfirm from '../common/ModalConfirm'
import TextLink from '../common/TextLink'
import PropTypes from 'prop-types'

ExtendedJournalCardPreview.propTypes = {
  date: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  index: PropTypes.number,
  handleDelete: PropTypes.func.isRequired,
}

export default function ExtendedJournalCardPreview({
  date,
  id,
  title,
  index,
  handleDelete,
}) {
  return (
    <CardContainer>
      <ModalConfirm handleDelete={handleDelete} id={id} />
      <CardDate>{date}</CardDate>
      <CardTitle>{title}</CardTitle>
      <TextLink href={'/journal/detail/' + index}>Details anzeigen</TextLink>
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
