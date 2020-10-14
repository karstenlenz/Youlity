import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import Button from '../common/Button'
import HeadlineUnderline from '../common/HeadlineUnderline'

export default function ExtendedJournalForm({ createJournalEntry }) {
  const currentDate = new Date()
  const history = useHistory()
  const [newJournalEntry, setNewJournalEntry] = useState({})
  const [inputRound, setInputRound] = useState(0)
  const [input, setInput] = useState('')

  const journalQuestions = {
    when: 'Wann fand die Situation wo statt?',
    what: 'Was ist passiert?',
    who: 'Wer war dabei? Welchen Anteil hatten diese anderen an der Situation?',
    think:
      'Was haben Sie in der Situation gedacht? (konkrete Gedanken wie: „Ich bin es einfach nicht wert.“)',
    feel: 'Wie fühlten Sie sich? (traurig, ärgerlich, beschämt etc.)',
    do: 'Was haben Sie getan?',
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
      <FormLabel htmlFor="title">
        {Object.values(journalQuestions)[inputRound]}
      </FormLabel>
      <TextAreaStyled
        id="title"
        name="title"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="z.B. Streit mit Stefanie"
      />
      <ButtonPair>
        <CancelLink to="/journal">
          <Button type="button" btnType="white">
            Abbrechen
          </Button>
        </CancelLink>
        <Button btnType="primary" width="47.5">
          Speichern
        </Button>
      </ButtonPair>
      <p>
        Alle Einträge werden nur auf Ihrem Gerät gespeichert. Es werden keine
        Daten übertragen.
      </p>
    </FormStyled>
  )

  function handleSubmit(event) {
    const currentQuestion = Object.keys(journalQuestions)[inputRound]
    const currentAnswer = input
    const journalEntry = { ...newJournalEntry }
    journalEntry[currentQuestion] = currentAnswer
    event.preventDefault()
    setInputRound(inputRound + 1)
    setInput('')
    setNewJournalEntry({ journalEntry })
    event.target.title.focus()

    // if (title.length === 0 || description.length === 0) {
    //   console.log('nixx eingetragen')
    //   return false
  }

  const newEntry = {
    //   date: currentDate.toLocaleDateString('de-DE', { timeZone: 'GMT' }),
    //   title,
    //   description,
    //   id: uuidv4(),
    // }
    // createJournalEntry(newEntry)
    // history.push('/journal')
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
const CancelLink = styled(Link)`
  width: 47.5%;
`
