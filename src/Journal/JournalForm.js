import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import Button from '../common/Button'
import HeadlineUnderline from '../common/HeadlineUnderline'

export default function JournalForm({ createJournalEntry }) {
  const currentDate = new Date()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const history = useHistory()

  return (
    <FormStyled onSubmit={handleSubmit}>
      <HeadlineUnderline>
        <h1>Eintrag erstellen</h1>
      </HeadlineUnderline>
      <DateHeadline>Datum</DateHeadline>
      <DateText>
        {currentDate.toLocaleDateString('de-DE', { timeZone: 'GMT' })}
      </DateText>
      <FormLabel htmlFor="title">Titel</FormLabel>
      <InputStyled
        id="title"
        name="title"
        placeholder="z.B. Streit mit Stefanie"
        value={title}
        onChange={handleTitleChange}
      />
      <FormLabel htmlFor="description">Beschreibung</FormLabel>
      <TextAreaStyled
        id="description"
        name="description"
        placeholder="Beschreiben Sie hier die Situation."
        rows="10"
        value={description}
        onChange={handleDescriptionChange}
      />
      <ButtonPair>
        <CancelLink to="/journal">
          <Button type="button" btnType="white">
            Abbrechen
          </Button>
        </CancelLink>
        <Button
          btnType="primary"
          width="47.5"
          isButtonDisabled={!title || !description}
        >
          Speichern
        </Button>
      </ButtonPair>
    </FormStyled>
  )

  function handleTitleChange(event) {
    setTitle(event.target.value)
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (title.length === 0 || description.length === 0) {
      console.log('nixx eingetragen')
      return false
    }

    const newEntry = {
      date: currentDate.toLocaleDateString('de-DE', { timeZone: 'GMT' }),
      title,
      description,
      id: uuidv4(),
    }
    createJournalEntry(newEntry)
    history.push('/journal')
  }
}
const FormStyled = styled.form``

const DateHeadline = styled.span`
  font-weight: 700;
  display: block;
  font-family: 'Ubuntu', sans-serif;
  margin-bottom: 10px;
`

const DateText = styled.span`
  display: block;
  font-size: 1em;
  margin-bottom: 20px;
`
const InputStyled = styled.input`
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  font-size: 1em;
  background: var(--light-grey);
  margin-bottom: 20px;
`

const TextAreaStyled = styled.textarea`
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  font-family: 'Cabin', sans-serif;
  font-size: 1em;
  background: var(--light-grey);
  margin-bottom: 20px;
`

const FormLabel = styled.label`
  display: block;
  font-family: 'Ubuntu', sans-serif;
  font-size: 1em;
  font-weight: 700;
  margin-bottom: 10px;
`
const ButtonPair = styled.div`
  display: flex;
  justify-content: space-between;
`
const CancelLink = styled(Link)`
  width: 47.5%;
`
