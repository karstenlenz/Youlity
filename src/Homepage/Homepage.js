import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import BrandHeadline from '../common/BrandHeadline'
import BulletList from '../common/BulletList'
import Button from '../common/Button'
import Card from '../common/Card'
import Collapse from '../common/Collapse'
import FloatingButtonContainer from '../common/FloatingButtonContainer'
import HeadlineUnderline from '../common/HeadlineUnderline'

export default function () {
  return (
    <>
      <img alt="" src="/img/mirror.svg" />
      <Logo alt="Youlity" src="/img/logo.svg" />
      <HeadlineUnderline>
        <h1>Discover Your Personality!</h1>
      </HeadlineUnderline>
      <p>
        Youlity ist eine Plattform, die Ihnen hilft, Ihre eigene Persönlichkeit
        über sogenannte Persönlichkeitsstile besser zu verstehen.
      </p>
      <Collapse headline="Was sind Persönlichkeitsstile?">
        <p>
          Die Psychologie hat sich lange hauptsächlich mit
          Persönlichkeits-störungen beschäftigt. Doch auch gesunde Menschen
          haben ein Interesse daran, Ihre Persönlichkeit zu verstehen, und in
          bestimmten Situationen ihr Handeln zu verändern. Dazu dient unser
          Youlity-Persönlichkeitstest. Im Gegensatz zu Tests wie z.B. „16
          Personalities“, die jeden Menschen in starre Persönlichkeitstypen
          zwängen wollen, erkennen wir an, dass jeder Mensch individuell ist.
          Deshalb messen wir Übereinstimmungen zu einzelnen
          „Persönlichkeitsstilen“. So entsteht ein differenziertes Modell Ihrer
          individuellen Persönlichkeit.
        </p>
      </Collapse>
      <Card>
        <BrandHeadline firstWord="Your" secondWord="Personality" />
        <SmallImg src="/img/style_info.svg" alt="" />
        <h2>Der Youlity-Test</h2>
        <BulletList listType="bullet_circle">
          <li>Entdecken Sie Ihre individuellen Persönlichkeitsstile.</li>
          <li>
            Entwickeln Sie ein besseres Verständnis für sich selbst in
            Beziehungen.
          </li>
          <li>Ideale Gesprächsstütze für Therapie-Termine. </li>
        </BulletList>
        <Link to="/motives/intro">
          <Button>Test starten</Button>
        </Link>
      </Card>
      <Card>
        <BrandHeadline firstWord="Your" secondWord="Reality" />
        <SmallImg src="/img/journal.svg" alt="" />
        <h2>Das Youlity-Tagebuch</h2>
        <BulletList listType="bullet_circle">
          <li>
            Notieren Sie sich Situationen, in denen sich Ihre Persönlichkeit
            widerspiegelt.
          </li>
          <li>Selbstbeobachtung ermöglicht Veränderung.</li>
          <li>Ideale Gesprächsstütze für Therapie-Termine.</li>
        </BulletList>
        <Link to="/journal">
          <Button>Tagebuch öffnen</Button>
        </Link>
      </Card>
      <BrandHeadline firstWord="Your" secondWord="Quality" />
      <HeadlineUnderline>
        <h2>Unser Versprechen</h2>
      </HeadlineUnderline>
      <BulletList listType="bullet_checkmark">
        <li>
          <h3>Seriös</h3>
          <p>
            Unser Angebot basiert auf neuesten Forschungsergebnissen der
            Psychologie.
          </p>
        </li>
        <li>
          <h3>Schnell</h3>
          <p>Der Test dauert nur ca. 5 Minuten.</p>
        </li>
        <li>
          <h3>Sicher</h3>
          <p>
            Wir übermitteln keine Daten von Ihnen. Ihre Privatsphäre ist absolut
            sicher.
          </p>
        </li>
      </BulletList>
      <FinePrint>
        Hinweis: Unser Angebot ersetzt keine psychologische Beratung. Wenn Sie
        unter psychischen Problemen leiden, suchen Sie sich bitte professionelle
        Hilfe.
      </FinePrint>
      <FloatingButtonContainer to="/motives/intro">
        <Button btnType="primary">Test starten</Button>
      </FloatingButtonContainer>
    </>
  )
}

const Logo = styled.img`
  margin-top: 20px;
  width: 50vw;
`
const SmallImg = styled.img`
  width: 50%;
`

const FinePrint = styled.small`
  margin-top: 20px;
  display: block;
`
