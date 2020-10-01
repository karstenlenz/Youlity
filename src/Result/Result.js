import React from 'react'
import styled from 'styled-components/macro'
import HeadlineUnderline from '../common/HeadlineUnderline'
import NoticeBox from '../common/NoticeBox'
import SectionBG from '../common/SectionBG'
import SectionBGWithButton from '../common/SectionBGWithButton'
import TextLink from '../common/TextLink'
import { personalityStyleData } from '../data/personalityStyleData'
import PropTypes from 'prop-types'
import Button from '../common/Button'
import { Link } from 'react-router-dom'
import useResults from './useResults'
import ResultBar from './ResultBar'
import { ReactComponent as IntroImg } from '../img/style_info.svg'

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
          <br />
          <br />
        </p>
        <TextLink href="https://www.wege-zur-psychotherapie.org/">
          Infoseite "Wege zur Psychotherapie" &gt;
        </TextLink>
      </NoticeBox>
      <IntroImgStyled title="" />
      <HeadlineUnderline>
        <h1>Ergebnis</h1>
      </HeadlineUnderline>
      <ResultIntro>
        Sie haben eben Tests für folgende Persönlichkeitsstile ausgefüllt:
      </ResultIntro>
      {resultData.map((result, index) => {
        return (
          <SectionBG key={result.id}>
            <h3>{personalityStyleData[result.id - 1]?.commonName}</h3>
            <ResultBar percentage={(result.yesCount / 8) * 100} index={index} />
            {result.yesCount > 4 ? (
              <>
                <StyleText>
                  Sie haben eine hohe Übereinstimmung mit diesem
                  Persönlichkeitsstil. <br />
                  Das heißt nicht, dass etwas mit Ihnen „nicht stimmt“, oder
                  eine Störung vorliegt! Jeder Mensch hat einen oder mehrere
                  dominante Persönlichkeitsstile. Erst wenn Sie unter Ihrer
                  Persönlichkeit leiden, besteht Handlungsbedarf. <br />
                  Lesen Sie sich die folgenden Informationen durch und prüfen
                  Sie ehrlich, ob die Beschreibungen auf Sie zutreffen.
                </StyleText>
                <TextLink href={'/style-info/' + result.id}>
                  Zu den Informationen &gt;
                </TextLink>
              </>
            ) : (
              <>
                <StyleText>
                  Das deutet <strong>wahrscheinlich nicht</strong> darauf hin,
                  dass dieser Stil bei Ihnen stark ausgeprägt ist.
                  <br /> Sie können sich die Beschreibung des
                  Persönlichkeitsstil trotzdem gerne durchlesen und prüfen, ob
                  Sie sich damit identifizieren können.
                </StyleText>
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
        Sie haben im ersten Schritt Fragebögen zu <strong>2 von 9</strong>{' '}
        Persönlichkeitsstilen ausgefüllt. Meist werden damit die für Sie
        relevantesten Persönlichkeitsstile abgedeckt. Sie können noch weitere
        Fragebögen ausfüllen, um zu erfahren, wie stark die weiteren
        Persönlichkeitsstile bei Ihnen ausgeprägt sind. Manche Menschen haben
        wenige, dafür stark ausgeprägte Stile, andere mehrere, jeweils weniger
        stark ausgeprägte Stile.
      </p>
      <Link to={'/questionnaire/entry/' + questionnaireIds + '/' + results}>
        <Button>Weiteren Fragebogen starten</Button>
      </Link>
      <SectionBGWithButton>
        <h2>Tagebuch</h2>
        <p>
          Sind Sie manchmal unzufrieden mit Ihrer Persönlichkeit? Unsere
          Tagebuch-Funktion hilft Ihnen, Ihr Verhalten zu analysieren und
          dadurch erste Schritte zu einer Veränderung anzustoßen.
        </p>
        <Link to="/journal">
          <Button btnType="secondary">Zum Tagebuch</Button>
        </Link>
      </SectionBGWithButton>
      <p>
        Tipp: Wir speichern Ihr Ergebnis nicht, aber Sie können sich diese Seite
        im Browser als Lesezeichen speichern, um diese Informationen erneut
        aufzurufen.
      </p>
    </>
  )
}

const IntroImgStyled = styled(IntroImg)`
  display: block;
  max-width: 300px;
  margin: 0 auto;
`

const ResultIntro = styled.p`
  margin-bottom: 40px;
`
const StyleText = styled.p`
  margin: 15px 0;
`
