import React from 'react'
import Questionnaire from './Questionnaire/Questionnaire'
import { Switch, Route } from 'react-router-dom'
import Motives from './Motives'
function App() {
  return (
    <main>
      <Switch>
        <Route path="/motives">
          <Motives />
        </Route>
        <Route path="/">
          <Questionnaire />
        </Route>
      </Switch>
    </main>
  )
}

export default App
