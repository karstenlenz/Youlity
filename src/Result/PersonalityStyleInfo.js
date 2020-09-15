import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import BulletList from '../common/BulletList'
import HeadlineUnderline from '../common/HeadlineUnderline'
import SectionBG from '../common/SectionBG'
import TextLink from '../common/TextLink'
import { personalityStyleData } from '../data/personalityStyleData'

export default function PersonalityStyleInfo() {
  const { styleId } = useParams()
  const currentStyleData = personalityStyleData[styleId - 1]

  return (
    <>
      <HeadlineUnderline>
        <h1>{currentStyleData.commonName}</h1>
      </HeadlineUnderline>
      <SectionNoBG>
        <HeadlineNoMarginTop>Einleitung</HeadlineNoMarginTop>
        <p>{currentStyleData.description}</p>
      </SectionNoBG>
      <InfoBG>
        <h2>Stärken</h2>
        <BulletList listType="bullet_circle">
          {currentStyleData.strengths.map((strength) => {
            return <li key={strength}>{strength}</li>
          })}
        </BulletList>
      </InfoBG>
      <SectionNoBG>
        <h2>Schwächen</h2>
        <BulletList listType="bullet_circle">
          {currentStyleData.weaknesses.map((weakness) => {
            return <li key={weakness}>{weakness}</li>
          })}
        </BulletList>
      </SectionNoBG>
      <InfoBG>
        <h2>Mindern Sie Ihre Schwächen ab, indem Sie...</h2>
        <BulletList listType="bullet_circle">
          {currentStyleData.tips.map((tip) => {
            return <li key={tip}>{tip}</li>
          })}
        </BulletList>
      </InfoBG>
      <h2>Weitere Informationen</h2>
      <p>
        Hinweis: folgende Ressourcen thematisieren größtenteils
        „Persönlichkeitsstörungen“. Das heißt weder, dass Sie eine
        Persönlichkeitsstörung haben, noch, dass nur Menschen mit
        Persönlichkeitsstörungen von den Informationen profitieren.
        Persönlichkeitsstörungen sind Steigerungen von Persönlichkeitsaspekten,
        die in geringerer Ausprägung viele Vorteile bieten können. Behalten Sie
        das bei der Lektüre im Hinterkopf.
      </p>
      <BulletList listType="bullet_circle">
        {currentStyleData.furtherInfo.map((info, index) => {
          return (
            <li key={index}>
              <TextLink href={info.url}>{info.text}</TextLink>
            </li>
          )
        })}
      </BulletList>
      <HelpSection>
        <h2>Hier gibt es Hilfe</h2>
        <p>
          Falls Sie unter Ihrem Persönlichkeitsstil leiden, holen Sie sich
          Hilfe! <br />
          Hier sind erste Anlaufstellen:
        </p>
        <ul>
          {currentStyleData.help.map((help, index) => {
            return (
              <li key={index}>
                <TextLink href={help.url}>{help.text}</TextLink>
              </li>
            )
          })}
        </ul>
      </HelpSection>
    </>
  )
}

const InfoBG = styled(SectionBG)`
  margin-bottom: 0px;
  padding-bottom: 1px;
`

const HeadlineNoMarginTop = styled.h2`
  margin-top: 0px;
`
const SectionNoBG = styled.section`
  margin-bottom: 40px;
`

const HelpSection = styled.section`
  background: var(--secondary);
  padding: 15px;
  border-radius: 5px;
`
