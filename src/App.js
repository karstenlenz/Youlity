import React, { useEffect, useState } from 'react'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import Motives from './Motives/Motives'
import { evaluateMatchingStyles } from './Motives/util'
import Questionnaire from './Questionnaire/Questionnaire'
import Result from './Result/Result'

function App() {
  const [userMotives, setUserMotives] = useState([])
  const [userStyles, setUserStyles] = useState([])
  const [result, setResult] = useState([
    {
      styleId: 1,
      yesCount: 3,
    },
    {
      styleId: 9,
      yesCount: 7,
    },
    {
      styleId: 5,
      yesCount: 6,
    },
  ])
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
          <Questionnaire
            userStyles={userStyles}
            onQuestionnaireEnd={handleQuestionnaireEnd}
          />
        </Route>
        <Route path="/result/:resultCode">
          <Result />
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

  function handleQuestionnaireEnd(resultId, resultBool) {
    setResult({ ...result, dominantStyle: resultId })
    history.push('/result/' + resultId + '/' + resultBool)
  }
}

export default App
