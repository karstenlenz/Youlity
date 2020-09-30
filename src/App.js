import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import Header from './common/Header'
import Homepage from './Homepage/Homepage'
import JournalForm from './Journal/JournalForm'
import JournalList from './Journal/JournalList'
import useJournalEntries from './Journal/useJournalEntries'
import { saveLocally } from './Journal/util'
import MotivesEntry from './Motives/MotivesEntry'
import MotivesIntro from './Motives/MotivesIntro'
import QuestionnaireEntryPage from './Questionnaire/QuestionnaireEntryPage'
import QuestionnaireIntroPage from './Questionnaire/QuestionnaireIntroPage'
import PersonalityStyleInfo from './Result/PersonalityStyleInfo'
import ResultPage from './Result/ResultPage'

export default function App() {
  const {
    journalEntries,
    createJournalEntry,
    deleteJournalEntry,
    handleSubmit,
  } = useJournalEntries()

  return (
    <>
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/">
          <Header />
        </Route>
      </Switch>
      <AppMain>
        <Switch>
          <Route path="/journal/entry">
            <JournalForm
              createJournalEntry={createJournalEntry}
              handleSubmit={handleSubmit}
            />
          </Route>
          <Route path="/journal">
            <JournalList
              journalEntries={journalEntries}
              deleteJournalEntry={deleteJournalEntry}
            />
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
    </>
  )
}

const AppMain = styled.main`
  overflow-x: hidden;
`
