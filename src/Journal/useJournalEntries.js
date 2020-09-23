import { useEffect, useState } from 'react'
import { loadLocally, saveLocally } from './util'

export default function useJournalEntries() {
  const [journalEntries, setJournalEntries] = useState(
    loadLocally('journalEntries') ?? []
  )

  useEffect(() => saveLocally('journalEntries', journalEntries), [
    journalEntries,
  ])

  function createJournalEntry(newEntry) {
    setJournalEntries([...journalEntries, newEntry])
  }

  function deleteJournalEntry(entryId) {
    const indexToDelete = journalEntries.findIndex(
      (element) => element.id === entryId
    )
    const updatedJournalEntries = [...journalEntries]
    updatedJournalEntries.splice(indexToDelete, 1)
    setJournalEntries(updatedJournalEntries)
  }

  return {
    journalEntries,
    setJournalEntries,
    createJournalEntry,
    deleteJournalEntry,
  }
}
