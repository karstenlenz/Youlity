import React from 'react'
import { useParams } from 'react-router-dom'
import HeadlineUnderline from '../common/HeadlineUnderline'
import ExtendedJournalCard from './ExtendedJournalCard'

export default function JournalDetailPage({
  journalEntries,
  deleteJournalEntry,
}) {
  const { index } = useParams()
  const currentEntry = journalEntries[index]

  return (
    <>
      <HeadlineUnderline>
        <h1>Tagebuch-Eintrag</h1>
      </HeadlineUnderline>
      <ExtendedJournalCard
        {...currentEntry}
        deleteJournalEntry={deleteJournalEntry}
      />
    </>
  )
}
