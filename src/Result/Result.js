import React from 'react'
import styled from 'styled-components/macro'
import HeadlineUnderline from '../common/HeadlineUnderline'
import NoticeBox from '../common/NoticeBox'
import SectionBG from '../common/SectionBG'
import TextLink from '../common/TextLink'
import { personalityStyleData } from '../data/personalityStyleData'
import PropTypes from 'prop-types'
import Button from '../common/Button'
import { Link } from 'react-router-dom'
import useResults from './useResults'

Result.propTypes = {
  questionnaireIds: PropTypes.string.isRequired,
  results: PropTypes.string.isRequired,
}

export default function Result({ questionnaireIds, results }) {
  const resultData = useResults(questionnaireIds, results)

  return (
    <>
      <NoticeBox>
        <h3>Hinweis</h3>
        <p>
          Unser Testergebnis stellt nur eine Tendenz dar und ersetzt keine
          psychologische Beratung. Wenn Sie sich unwohl fühlen, holen Sie sich
          professionelle Hilfe.
        </p>
        <TextLink href="https://www.wege-zur-psychotherapie.org/">
          Infoseite "Wege zur Psychotherapie" &gt;
        </TextLink>
      </NoticeBox>
      <img src="/img/style_info.svg" alt="" />
      <HeadlineUnderline>
        <h1>Ergebnis</h1>
      </HeadlineUnderline>
      <ResultIntro>
        Sie haben eben Tests für folgende Persönlichkeitsstile ausgefüllt:
      </ResultIntro>
      {resultData.map((result) => {
        return (
          <SectionBG key={result.id}>
            <h3>{personalityStyleData[result.id - 1]?.commonName}</h3>
            <p>
              Sie haben {result.yesCount} von{' '}
              {personalityStyleData[result.id - 1].questions.length} Fragen mit
              "Ja" beantwortet.
            </p>
            {result.yesCount > 4 ? (
              <>
                <p>
                  Das kann darauf hindeuten, dass dieser Stil bei Ihnen
                  überdurchschnittlich ausgeprägt ist. <br />
                  Das heißt nicht, dass etwas mit Ihnen „nicht stimmt“, oder
                  eine Störung vorliegt! Jeder Mensch hat einen oder mehrere
                  dominante Persönlichkeitsstile. Erst wenn Sie unter Ihrer
                  Persönlichkeit leiden, besteht Handlungsbedarf. <br />
                  Lesen Sie sich die folgenden Informationen durch und prüfen
                  Sie ehrlich, ob die Beschreibungen auf Sie zutreffen.
                </p>
                <TextLink href={'/style-info/' + result.id}>
                  Zu den Informationen &gt;
                </TextLink>
              </>
            ) : (
              <>
                <p>
                  Das deutet <strong>wahrscheinlich nicht</strong> darauf hin,
                  dass dieser Stil bei Ihnen überdurchschnittlich ausgeprägt
                  ist.
                  <br /> Sie können sich die Beschreibung des
                  Persönlichkeitsstil trotzdem gerne durchlesen und prüfen, ob
                  Sie sich damit identifizieren können.
                </p>
                <TextLink href={'/style-info/' + result.id}>
                  Zu den Informationen &gt;
                </TextLink>
              </>
            )}
          </SectionBG>
        )
      })}
      <h3>Weitere Fragebögen</h3>
      <p>
        Sie haben im ersten Schritt 2 von 9 Fragebögen ausgefüllt. Sie können
        auch noch weitere Fragebögen ausfüllen, um zu erfahren, wie stark die
        weiteren Persönlichkeitsstile bei Ihnen ausgeprägt sind. Manche Menschen
        haben wenige, dafür stark ausgepräge Stile, andere mehrere, jeweils
        weniger stark ausgeprägte Stile.
      </p>
      <Link to={'/questionnaire/entry/' + questionnaireIds + '/' + results}>
        <Button>Weiteren Fragebogen starten</Button>
      </Link>
      <SectionBG>
        <p>
          Tipp: Wir speichern Ihr Ergebnis nicht, aber Sie können sich diese
          Seite im Browser als Lesezeichen speichern, um diese Informationen
          erneut aufzurufen.
        </p>
      </SectionBG>
    </>
  )
}

const ResultIntro = styled.p`
  margin-bottom: 40px;
`
