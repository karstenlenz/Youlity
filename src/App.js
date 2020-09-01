import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Motives from './Motives/Motives'
import { evaluateMatchingStyles } from './Motives/util'
import Questionnaire from './Questionnaire/Questionnaire'
import Result from './Result/Result'

function App() {
  const [userMotives, setUserMotives] = useState([])
  const [userStyles, setUserStyles] = useState([])
  const [result, setResult] = useState({
    questionnaires: [],
    dominantStyle: null,
  })

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
        <Route path="/result/:id">
          <Result dominantStyle={result.dominantStyle} />
        </Route>
        <Route path="/">
          <Motives
            userMotives={userMotives}
            handleMotiveClick={handleMotiveClick}
          />
        </Route>
      </Switch>
    </main>
  )

  function handleMotiveClick(event, motive) {
    const button = event.target
    button.disabled = true
    setUserMotives([...userMotives, motive])
  }
}

export default App
