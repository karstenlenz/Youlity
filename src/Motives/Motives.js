import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import MotiveButtons from './MotiveButtons'
import { evaluateMatchingStyles } from './util'

export default function Motives() {
  const [userMotives, setUserMotives] = useState([])
  const history = useHistory()

  useEffect(() => {
    if (userMotives.length === 3) {
      const userPersonalityStyles = evaluateMatchingStyles(userMotives)
      const questionnaireUrl =
        '/questionnaire/' + userPersonalityStyles[0] + userPersonalityStyles[1]
      setUserMotives([])
      history.push(questionnaireUrl)
    }
  }, [userMotives, history])

  return (
    <>
      <h1>Bedürfnisse</h1>
      <h2>
        Bitte wählen Sie die 3 Bedürfnisse aus, die Ihnen am wichtigsten sind.
        Fangen Sie mit dem wichtigsten an.
      </h2>
      <ol>
        <li> {userMotives[0]} </li>
        <li> {userMotives[1]} </li>
        <li> {userMotives[2]} </li>
      </ol>
      <MotiveButtons handleMotiveClick={handleMotiveClick} />
    </>
  )

  function handleMotiveClick(event, motive) {
    const button = event.target
    button.disabled = true
    setUserMotives([...userMotives, motive])
  }
}
