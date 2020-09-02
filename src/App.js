import React, { useEffect, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import Motives from './Motives/Motives'
import { evaluateMatchingStyles } from './Motives/util'
import Questionnaire from './Questionnaire/Questionnaire'
import Resultpage from './Result/Resultpage'

export default function App() {
  const [userMotives, setUserMotives] = useState([])
  const [userPersonalityStyleIds, setuserPersonalityStyleIds] = useState([])
  const [result, setResult] = useState([])
  const [questionRound, setQuestionRound] = useState(1)
  const history = useHistory()

  useEffect(() => {
    if (userMotives.length === 3) {
      console.log('Matching styles:' + evaluateMatchingStyles(userMotives))
      setuserPersonalityStyleIds(evaluateMatchingStyles(userMotives))
    }
  }, [userMotives])

  return (
    <main>
      <Switch>
        <Route path="/questionnaire">
          <Questionnaire
            userPersonalityStyleIds={userPersonalityStyleIds}
            onQuestionnaireEnd={handleQuestionnaireEnd}
            round={questionRound}
          />
        </Route>
        <Route path="/result/:resultCode">
          <Resultpage />
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

  function handleQuestionnaireEnd(resultId, yesCount) {
    if (questionRound === 1) {
      setResult([...result, { styleId: resultId, yesCount }])
      setQuestionRound(questionRound + 1)
    } else {
      setResult([...result, { styleId: resultId, yesCount }])
      history.push(
        '/result/' +
          result[0].styleId +
          '&' +
          result[0].yesCount +
          '&' +
          resultId +
          '&' +
          yesCount
      )
    }
  }
}
