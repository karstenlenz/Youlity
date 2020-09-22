import React from 'react'
import styled from 'styled-components/macro'
import ModalConfirm from '../common/ModalConfirm'
import PropTypes from 'prop-types'

JournalCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
}

export default function JournalCard({
  date,
  title,
  description,
  id,
  handleDelete,
}) {
  return (
    <CardContainer>
      <ModalConfirm handleDelete={handleDelete} id={id} />
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
