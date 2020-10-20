import React from 'react'
import styled from 'styled-components/macro'
import Button from '../common/Button'
import HeadlineUnderline from '../common/HeadlineUnderline'
import useExtendedJournalForm from './useExtendedJournalForm'

export default function ExtendedJournalForm({ createJournalEntry }) {
  const {
    currentDate,
    journalQuestions,
    inputRound,
    input,
    setInput,
    handleBack,
    handleSubmit,
  } = useExtendedJournalForm(createJournalEntry)

  return (
    <FormStyled onSubmit={handleSubmit}>
      <HeadlineUnderline>
        <h1>Strukturierte Situationsanalyse</h1>
      </HeadlineUnderline>
      <DateHeadline>Datum</DateHeadline>
      <DateText>
        {currentDate.toLocaleDateString('de-DE', { timeZone: 'GMT' })}
      </DateText>
      <FormLabel htmlFor="question">
        {Object.values(journalQuestions)[inputRound]}
        {' (' +
          (inputRound + 1) +
          ' / ' +
          Object.values(journalQuestions).length +
          ')'}
      </FormLabel>
      <TextAreaStyled
        id="question"
        name="question"
        value={input}
        rows="10"
        onChange={(event) => setInput(event.target.value)}
      />
      <ButtonPair>
        <Button type="button" btnType="white" width="47.5" onClick={handleBack}>
          Abbrechen
        </Button>
        <Button
          btnType="primary"
          width="47.5"
          isButtonDisabled={!input ? true : false}
        >
          {inputRound + 1 === Object.values(journalQuestions).length
            ? 'Speichern'
            : 'Weiter'}
        </Button>
      </ButtonPair>
    </FormStyled>
  )
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

const TextAreaStyled = styled.textarea`
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  font-family: 'Cabin', sans-serif;
  font-size: 1em;
  background: var(--light-grey);
  margin-bottom: 20px;
  max-height: 200px;
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
