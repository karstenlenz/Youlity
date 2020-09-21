import React from 'react'
import Button from '../common/Button'
import FloatingButtonContainer from '../common/FloatingButtonContainer'
import HeadlineUnderline from '../common/HeadlineUnderline'
import JournalCard from './JournalCard'

export default function JournalList({ journalEntries }) {
  return (
    <>
      <img alt="" src="/img/journal.svg" />
      <HeadlineUnderline>
        <h1>Tagebuch</h1>
      </HeadlineUnderline>
      {journalEntries.length === 0 ? (
        <p>
          Es sind noch keine Einträge vorhanden. Legen Sie jetzt einen neuen an.
        </p>
      ) : (
        journalEntries.map((entry) => (
          <JournalCard
            key={entry.id}
            date={entry.date}
            title={entry.title}
            description={entry.description}
          ></JournalCard>
        ))
      )}

      <FloatingButtonContainer to="/journal/entry">
        <Button btnType="primary">Eintrag erstellen</Button>
      </FloatingButtonContainer>
    </>
  )
}
