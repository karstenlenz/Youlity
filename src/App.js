import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Motives from './Motives/Motives'
import Questionnaire from './Questionnaire/Questionnaire'
import Resultpage from './Result/Resultpage'

export default function App() {
  return (
    <main>
      <Switch>
        <Route path="/questionnaire/:testIdParam">
          <Questionnaire />
        </Route>
        <Route path="/result/:resultCode">
          <Resultpage />
        </Route>
        <Route path="/">
          <Motives />
        </Route>
      </Switch>
    </main>
  )
}
