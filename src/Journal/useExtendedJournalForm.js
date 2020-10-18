import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

export default function useExtendedJournalForm(createJournalEntry) {
  const currentDate = new Date()
  const history = useHistory()
  const [newJournalEntry, setNewJournalEntry] = useState({
    date: currentDate.toLocaleDateString('de-DE', {
      timeZone: 'GMT',
    }),
    type: 'extended',
    id: uuidv4(),
  })
  const [inputRound, setInputRound] = useState(0)
  const [input, setInput] = useState('')

  const journalQuestions = {
    title: 'Geben Sie dem Eintrag einen kurzen Titel.',
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

  return {
    currentDate,
    journalQuestions,
    inputRound,
    input,
    setInput,
    handleBack,
    handleSubmit,
  }
}
