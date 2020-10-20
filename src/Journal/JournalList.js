import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from '../common/Button'
import Collapse from '../common/Collapse'
import HeadlineUnderline from '../common/HeadlineUnderline'
import { ReactComponent as IntroImg } from '../img/journal.svg'
import ExtendedJournalCardPreview from './ExtendedJournalCardPreview'
import JournalCard from './JournalCard'

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
      <SmallH2>
        Mein zwischenmenschlicher Alltag: Situationen beschreiben, Muster
        erkennen und Veränderungen einleiten
      </SmallH2>
      <Collapse
        headline="Hilfetext anzeigen"
        headlineOpen="Hilfetext verstecken"
      >
        Hier können Sie besondere, schwierige oder sich wiederholende
        Situationen notieren, in denen Sie mit Ihrem zwischenmenschlichen
        Verhalten nicht zufrieden waren. Besonders wichtig sind Ereignisse, in
        denen sich Ihre Persönlichkeitsstile widerspiegeln. Hierbei können Sie
        das Ergebnis Ihres Youlity-Tests nutzen: Informieren Sie sich in Youlity
        über Ihre Persönlichkeitsstile. Tragen Sie in nächster Zeit solche
        Situationen in das Tagebuch ein, die mit Ihren Persönlichkeitsstilen in
        Verbindung stehen. Sie haben die Wahl zwischen einem freien Notieren
        oder einer geleiteten, strukturierten Situationsanalyse.
      </Collapse>
      {journalEntries.length === 0 ? (
        <p>
          Es sind noch keine Einträge vorhanden. Legen Sie jetzt einen neuen an.
        </p>
      ) : (
        journalEntries.map((entry, index) => {
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
          } else if (entry.type === 'extended') {
            return (
              <ExtendedJournalCardPreview
                key={entry.id}
                date={entry.date}
                id={entry.id}
                title={entry.title}
                handleDelete={deleteJournalEntry}
                index={index}
              />
            )
          } else return ''
        })
      )}
      <BottomSpacer />
      <FloatingButtonsContainer>
        <Link to="/journal/entry">
          <Button btnType="primary">Freier Eintrag</Button>
        </Link>
        <Link to="/journal/entry-extended">
          <Button btnType="secondary">Strukturierter Eintrag</Button>
        </Link>
      </FloatingButtonsContainer>
    </>
  )
}
const IntroImgStyled = styled(IntroImg)`
  display: block;
  margin: 0 auto;
  max-width: 300px;
`

const SmallH2 = styled.h2`
  font-size: 1em;
`
const BottomSpacer = styled.div`
  margin-bottom: 160px;
`

const FloatingButtonsContainer = styled.div`
  z-index: var(--floating-button);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 900px;
  padding: 0 15px;
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );

  @media screen and (min-width: 750px) {
    width: 100%;
    left: auto;
    right: auto;
    margin-left: -15px;
  }
`
