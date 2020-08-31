import React, { useState } from 'react'
import Questionnaire from './Questionnaire/Questionnaire'
import { Switch, Route } from 'react-router-dom'
import Motives from './Motives/Motives'
function App() {
  const [userMotives, setUserMotives] = useState([])

  return (
    <main>
      <Switch>
        <Route path="/">
          <Motives userMotives={userMotives} setUserMotives={setUserMotives} />
        </Route>
        <Route path="/questionnaire">
          <Questionnaire />
        </Route>
      </Switch>
    </main>
  )
}

export default App
