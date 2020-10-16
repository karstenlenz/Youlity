import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import Button from '../common/Button'
import HeadlineUnderline from '../common/HeadlineUnderline'

export default function ExtendedJournalForm({ createJournalEntry }) {
  const currentDate = new Date()
  const history = useHistory()
  const [newJournalEntry, setNewJournalEntry] = useState({
    date: currentDate.toLocaleDateString('de-DE', { timeZone: 'GMT' }),
    type: 'extended',
    id: uuidv4(),
  })
  const [inputRound, setInputRound] = useState(0)
  const [input, setInput] = useState('')

  const journalQuestions = {
    when: 'Wann fand die Situation wo statt?',
    what: 'Was ist passiert?',
    who: 'Wer war dabei? Welchen Anteil hatten diese anderen an der Situation?',
    think:
      'Was haben Sie in der Situation gedacht? (konkrete Gedanken wie: „Ich bin es einfach nicht wert.“)',
    feel: 'Wie fühlten Sie sich? (traurig, ärgerlich, beschämt etc.)',
    doWhat: 'Was haben Sie getan?',
    consequence: 'Wozu hat das geführt?',
    otherPeople: 'Wie verhielten die anderen Personen sich daraufhin?',
    agreement: 'Waren Sie mit dem Ergebnis der Situation einverstanden?',
    doDifferent: 'Was hätten Sie rückblickend gern anders gemacht?',
    howChange:
      'Wie hätten Sie im Nachhinein vielleicht ein besseres Ergebnis der Situation herbeiführen können?',
    learn: 'Was lerne ich aus meinen Erfahrungen in dieser Situation?',
    cause:
      'Welche meiner Annahmen und Überzeugungen über Beziehungen im Allgemeinen könnten diese Situation mit verändert oder sogar verzerrt haben?',
  }

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
        <Button btnType="primary" width="47.5">
          Speichern
        </Button>
      </ButtonPair>
    </FormStyled>
  )

  function handleBack(event) {
    event.preventDefault()
    if (inputRound === 0) {
      history.push('/journal')
    } else {
      setInputRound(inputRound - 1)
    }
  }
  function handleSubmit(event) {
    event.preventDefault()

    const currentQuestion = Object.keys(journalQuestions)[inputRound]
    const currentAnswer = input
    const journalEntry = { ...newJournalEntry }

    if (input.length === 0) {
      event.target.question.focus()
      return false
    } else if (inputRound === Object.values(journalQuestions).length - 1) {
      journalEntry[currentQuestion] = currentAnswer
      createJournalEntry(journalEntry)
      history.push('/journal')
    } else {
      journalEntry[currentQuestion] = currentAnswer
      setInputRound(inputRound + 1)
      setInput('')
      setNewJournalEntry(journalEntry)
      event.target.question.focus()
    }
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
