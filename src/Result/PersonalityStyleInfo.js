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
      <p>{currentStyleData.strengths}</p>
      <h2>Schwächen</h2>
      <p>{currentStyleData.weaknesses}</p>
      <h2>Tipps</h2>
      <p>{currentStyleData.tips}</p>
      <h2>Weitere Informationen</h2>
      <ul>
        {currentStyleData.help.map((info) => {
          return (
            <li>
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
          {currentStyleData.help.map((help) => {
            return (
              <li>
                <a href={help.url}>{help.text}</a>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
