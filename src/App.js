import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import MotivesEntry from './Motives/MotivesEntry'
import QuestionnaireIntroPage from './Questionnaire/QuestionnaireIntroPage'
import ResultPage from './Result/ResultPage'
import PersonalityStyleInfo from './Result/PersonalityStyleInfo'
import Homepage from './Homepage/Homepage'
import MotivesIntro from './Motives/MotivesIntro'
import styled from 'styled-components/macro'
import QuestionnaireEntryPage from './Questionnaire/QuestionnaireEntryPage'
import JournalForm from './Journal/JournalForm'
import JournalList from './Journal/JournalList'
import { useState } from 'react'
import { loadLocally, saveLocally } from './Journal/util'

export default function App() {
  const [journalEntries, setJournalEntries] = useState(
    loadLocally('journalEntries') ?? []
  )

  function createJournalEntry(newEntry) {
    setJournalEntries([...journalEntries, newEntry])
  }

  useEffect(() => saveLocally('journalEntries', journalEntries), [
    journalEntries,
  ])

  return (
    <AppMain>
      <Switch>
        <Route path="/journal/entry">
          <JournalForm createJournalEntry={createJournalEntry} />
        </Route>
        <Route path="/journal">
          <JournalList journalEntries={journalEntries} />
        </Route>
        <Route path="/style-info/:styleId">
          <PersonalityStyleInfo />
        </Route>
        <Route path="/result/:questionnaireIds/:results">
          <ResultPage />
        </Route>
        <Route path="/questionnaire/entry/:questionnaireIds/:results?">
          <QuestionnaireEntryPage />
        </Route>
        <Route path="/questionnaire/intro/:questionnaireIds/:results?">
          <QuestionnaireIntroPage />
        </Route>
        <Route path="/motives/entry">
          <MotivesEntry />
        </Route>
        <Route path="/motives/intro">
          <MotivesIntro />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </AppMain>
  )
}

const AppMain = styled.main`
  overflow-x: hidden;
`
