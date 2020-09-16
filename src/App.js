import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Motives from './Motives/Motives'
import QuestionnaireIntroPage from './Questionnaire/QuestionnaireIntroPage'
import ResultPage from './Result/ResultPage'
import PersonalityStyleInfo from './Result/PersonalityStyleInfo'
import Homepage from './Homepage/Homepage'
import MotivesIntro from './Motives/MotivesIntro'
import styled from 'styled-components/macro'
import QuestionnaireEntryPage from './Questionnaire/QuestionnaireEntryPage'

export default function App() {
  return (
    <AppMain>
      <Switch>
        <Route path="/questionnaire/intro/:testIdParam">
          <QuestionnaireIntroPage />
        </Route>
        <Route path="/questionnaire/entry/:testIdParam">
          <QuestionnaireEntryPage />
        </Route>
        <Route path="/result/:resultCode">
          <ResultPage />
        </Route>
        <Route path="/style-info/:styleId">
          <PersonalityStyleInfo />
        </Route>
        <Route path="/motives/entry">
          <Motives />
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
