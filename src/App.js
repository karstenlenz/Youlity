import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Motives from './Motives/Motives'
import QuestionnairePage from './Questionnaire/QuestionnairePage'
import ResultPage from './Result/ResultPage'
import PersonalityStyleInfo from './Result/PersonalityStyleInfo'

export default function App() {
  return (
    <main>
      <Switch>
        <Route path="/questionnaire/:testIdParam">
          <QuestionnairePage />
        </Route>
        <Route path="/result/:resultCode">
          <ResultPage />
        </Route>
        <Route path="/style-info/:styleId">
          <PersonalityStyleInfo />
        </Route>
        <Route path="/">
          <Motives />
        </Route>
      </Switch>
    </main>
  )
}
