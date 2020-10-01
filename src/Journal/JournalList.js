import React from 'react'
import styled from 'styled-components/macro'
import Button from '../common/Button'
import Collapse from '../common/Collapse'
import FloatingButtonContainer from '../common/FloatingButtonContainer'
import HeadlineUnderline from '../common/HeadlineUnderline'
import { ReactComponent as IntroImg } from '../img/journal.svg'
import JournalCard from './JournalCard'
import PropTypes from 'prop-types'

JournalList.propTypes = {
  journalEntries: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteJournalEntry: PropTypes.func.isRequired,
}

export default function JournalList({ journalEntries, deleteJournalEntry }) {
  return (
    <>
      <IntroImgStyled title="" />
      <HeadlineUnderline>
        <h1>Tagebuch</h1>
      </HeadlineUnderline>
      <Collapse
        headline="Hilfetext anzeigen"
        headlineOpen="Hilfetext verstecken"
      >
        Hier können Sie besondere, schwierige oder sich wiederholende
        Situationen notieren, in denen Sie mit Ihrem zwischenmenschlichen
        Verhalten nicht zufrieden waren. Besonders wichtig sind Ereignisse, in
        denen sich Ihre Persönlichkeitsstile widerspiegeln. Beispielsweise: Der
        Fragebogen für den wachsamen Stil ergibt hohe Übereinstimmungen und in
        der Situation sind Sie sehr misstrauisch. Selbstbeobachtung Ihres
        Interaktionsverhaltens ermöglicht Veränderung. Beschreiben Sie dabei
        bitte zeitnah möglichst konkret und genau die Situation.
      </Collapse>
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
            id={entry.id}
            handleDelete={deleteJournalEntry}
          ></JournalCard>
        ))
      )}

      <FloatingButtonContainer to="/journal/entry">
        <Button btnType="primary">Eintrag erstellen</Button>
      </FloatingButtonContainer>
    </>
  )
}
const IntroImgStyled = styled(IntroImg)`
  display: block;
  margin: 0 auto;
  max-width: 300px;
`
