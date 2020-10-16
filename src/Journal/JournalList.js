import React from 'react'
import styled from 'styled-components/macro'
import Button from '../common/Button'
import Collapse from '../common/Collapse'
import FloatingButtonContainer from '../common/FloatingButtonContainer'
import HeadlineUnderline from '../common/HeadlineUnderline'
import { ReactComponent as IntroImg } from '../img/journal.svg'
import JournalCard from './JournalCard'
import ExtendedJournalCard from './ExtendedJournalCard'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

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
        journalEntries.map((entry) => {
          if (entry.type === 'short') {
            return (
              <JournalCard
                key={entry.id}
                date={entry.date}
                title={entry.title}
                description={entry.description}
                id={entry.id}
                handleDelete={deleteJournalEntry}
              />
            )
          } else {
            return (
              <ExtendedJournalCard
                key={entry.id}
                date={entry.date}
                id={entry.id}
                when={entry.when}
                what={entry.what}
                who={entry.who}
                think={entry.think}
                feel={entry.feel}
                doWhat={entry.doWhat}
                consequence={entry.consequence}
                otherPeople={entry.otherPeople}
                agreement={entry.agreement}
                doDifferent={entry.doDifferent}
                howChange={entry.howChange}
                learn={entry.learn}
                cause={entry.cause}
                handleDelete={deleteJournalEntry}
              />
            )
          }
        })
      )}
      <Link to="/journal/entry">
        <Button btnType="primary">Freier Eintrag</Button>
      </Link>
      <Link to="/journal/entry-extended">
        <Button btnType="secondary">Strukturierter Eintrag</Button>
      </Link>
    </>
  )
}
const IntroImgStyled = styled(IntroImg)`
  display: block;
  margin: 0 auto;
  max-width: 300px;
`
