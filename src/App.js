import React, { useState, useEffect } from 'react'
import Questionnaire from './Questionnaire/Questionnaire'
import { Switch, Route, useHistory } from 'react-router-dom'
import Motives from './Motives/Motives'
import { evaluateMatchingStyles } from './Motives/util'

function App() {
  const [userMotives, setUserMotives] = useState([])
  const [userStyles, setUserStyles] = useState([])
  const history = useHistory()

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
          {userStyles.length > 0 ? (
            <Questionnaire userStyles={userStyles} />
          ) : (
            history.push('/')
          )}
        </Route>
        <Route path="/">
          <Motives userMotives={userMotives} setUserMotives={setUserMotives} />
        </Route>
      </Switch>
    </main>
  )
}

export default App
