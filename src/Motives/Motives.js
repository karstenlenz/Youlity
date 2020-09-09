import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import MotiveButtons from './MotiveButtons'
import { evaluateMatchingStyles } from './util'
import HeadlineUnderline from '../common/HeadlineUnderline'
import styled from 'styled-components'

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
      <img alt="" src="/img/motives-intro.svg" />
      <HeadlineUnderline>
        <h1>Schritt 1: Bedürfnisse</h1>
      </HeadlineUnderline>
      <SmallH2>
        Wählen Sie bitte intuitiv die drei Bedürfnisse aus, die für Sie am
        Wichtigsten sind. Entscheiden Sie sich für die Begriffe, die Sie zuerst
        ansprechen.
      </SmallH2>
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

const SmallH2 = styled.h4``
