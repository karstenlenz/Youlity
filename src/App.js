import React, { useState, useEffect } from 'react'
import Questionnaire from './Questionnaire/Questionnaire'
import { Switch, Route } from 'react-router-dom'
import Motives from './Motives/Motives'
import { evaluateMatchingStyles } from './Motives/util'

function App() {
  const [userMotives, setUserMotives] = useState([])
  const [userStyles, setUserStyles] = useState([])

  useEffect(() => {
    if (userMotives.length === 3) {
      console.log('Matching styles:' + evaluateMatchingStyles(userMotives))
      setUserStyles(evaluateMatchingStyles(userMotives))
    }
  }, [userMotives])

  return (
    <main>
      <Switch>
        <Route path="/questionnaire">
          <Questionnaire userStyles={userStyles} />
        </Route>
        <Route path="/">
          <Motives userMotives={userMotives} setUserMotives={setUserMotives} />
        </Route>
      </Switch>
    </main>
  )
}

export default App
