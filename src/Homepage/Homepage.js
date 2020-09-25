import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import BrandHeadline from '../common/BrandHeadline'
import BulletList from '../common/BulletList'
import Button from '../common/Button'
import Card from '../common/Card'
import Collapse from '../common/Collapse'
import FinePrint from '../common/FinePrint'
import FloatingButtonContainer from '../common/FloatingButtonContainer'
import HeadlineUnderline from '../common/HeadlineUnderline'
import { ReactComponent as Logo } from '../img/logo.svg'
import { ReactComponent as MirrorImg } from '../img/mirror.svg'
import { ReactComponent as JournalImg } from '../img/journal.svg'
import { ReactComponent as StyleInfoImg } from '../img/style_info.svg'

export default function () {
  return (
    <>
      <MirrorStyled title="" />
      <LogoStyled title="Youlity" />
      <HeadlineUnderline>
        <h1>Discover Your Personality!</h1>
      </HeadlineUnderline>
      <p>
        Youlity ist eine Plattform, die Ihnen hilft, Ihre eigene Persönlichkeit
        über sogenannte Persönlichkeitsstile besser zu verstehen.
      </p>
      <Collapse headline="Was sind Persönlichkeitsstile?">
        <p>
          Die Psychologie hat sich lange hauptsächlich mit Persönlichkeits-
          <em>störungen</em> beschäftigt. Doch auch gesunde Menschen haben ein
          Interesse daran, Ihre Persönlichkeit zu verstehen, und in bestimmten
          Situationen ihr Handeln zu verändern. Dazu dient unser
          Youlity-Persönlichkeitstest.
          <br /> Im Gegensatz zu Tests, die mit starren Persönlichkeits-
          <em>Typen</em> arbeiten, wie z. B. „16 Personalities“, gehen wir davon
          aus, dass jeder Mensch individuell ist. Deshalb messen wir nur
          Übereinstimmungen zu einzelnen „Persönlichkeitsstilen“.
          <br />
          Persönlichkeitsstile sind Muster aus stabilen Merkmalen in Menschen,
          die sich aus der individuellen Lebensgeschichte ergeben. Youlity hilft
          Ihnen, ein differenziertes Modell Ihrer individuellen Persönlichkeit
          zu erstellen.
        </p>
      </Collapse>
      <Card>
        <BrandHeadline firstWord="Your" secondWord="Personality" />
        <StyleInfoImgStyled title="" />
        <h2>Der Youlity-Test</h2>
        <BulletList listType="bullet_circle">
          <li>Entdecken Sie Ihre individuellen Persönlichkeitsstile.</li>
          <li>
            Entwickeln Sie ein besseres Verständnis für sich selbst in
            zwischenmenschlichen Beziehungen.
          </li>
          <li>
            Profitieren Sie von speziell auf Sie zugeschnittenen Alltagstipps.
          </li>
        </BulletList>
        <Link to="/motives/intro">
          <Button>Test starten</Button>
        </Link>
      </Card>
      <Card>
        <BrandHeadline firstWord="Your" secondWord="Reality" />
        <JournalImgStyled title="" />
        <h2>Das Youlity-Tagebuch</h2>
        <BulletList listType="bullet_circle">
          <li>
            Notieren Sie sich Situationen, in denen sich Ihre Persönlichkeit
            widerspiegelt.
          </li>
          <li>
            Übernehmen Sie die Kontrolle: Selbstbeobachtung ermöglicht
            Veränderung.
          </li>
          <li>
            Nutzen Sie das Tagebuch als Gesprächsstütze für Therapie-Termine.
          </li>
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

const LogoStyled = styled(Logo)`
  display: block;
  margin: 15px auto 0 auto;
  width: 50%;
  max-width: 300px;
`

const MirrorStyled = styled(MirrorImg)`
  display: block;
  margin: 0 auto;
  max-width: 300px;
`

const StyleInfoImgStyled = styled(StyleInfoImg)`
  display: block;
  margin: 0 auto;
  width: 50%;
  height: 50%;
`

const JournalImgStyled = styled(JournalImg)`
  display: block;
  margin: 0 auto;
  width: 50%;
  height: 50%;
`
