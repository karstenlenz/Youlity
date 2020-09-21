import React from 'react'

export default function JournalList({ journalEntries }) {
  return (
    <>
      <h1>Hier kommt die Liste hin</h1>

      {journalEntries.map((entry) => (
        <section key={entry.id}>
          <h2>{entry.date.toLocaleDateString('de-DE', { timeZone: 'GMT' })}</h2>
          <h3>{entry.title}</h3>
          <p>{entry.description}</p>
        </section>
      ))}
    </>
  )
}
