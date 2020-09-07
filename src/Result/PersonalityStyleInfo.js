import React from 'react'
import { useParams } from 'react-router-dom'
import { personalityStyleData } from '../data/personalityStyleData'
import { capitalizeFirstLetter } from '../common/util'

export default function PersonalityStyleInfo() {
  const { styleId } = useParams()
  const currentStyleData = personalityStyleData[styleId - 1]

  return (
    <>
      <h1>{capitalizeFirstLetter(currentStyleData.name)}</h1>
      <h2>Einleitung</h2>
      <p>{currentStyleData.description}</p>
      <h2>Stärken</h2>
      <ul>
        {currentStyleData.strengths.map((strength) => {
          return <li key={strength}>{strength}</li>
        })}
      </ul>
      <h2>Schwächen</h2>
      <ul>
        {currentStyleData.weaknesses.map((weakness) => {
          return <li key={weakness}>{weakness}</li>
        })}
      </ul>
      <h2>Tipps</h2>
      <ul>
        {currentStyleData.tips.map((tip) => {
          return <li key={tip}>{tip}</li>
        })}
      </ul>
      <h2>Weitere Informationen</h2>
      <ul>
        {currentStyleData.furtherInfo.map((info, index) => {
          return (
            <li key={index}>
              <a href={info.url}>{info.text}</a>
            </li>
          )
        })}
      </ul>
      <section>
        <h2>Hier gibt es Hilfe</h2>
        <p>
          Falls Sie unter Ihrem Persönlichkeitsstil leiden, holen Sie sich
          Hilfe! Hier sind erste Anlaufstellen:
        </p>
        <ul>
          {currentStyleData.help.map((help, index) => {
            return (
              <li key={index}>
                <a href={help.url}>{help.text}</a>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
