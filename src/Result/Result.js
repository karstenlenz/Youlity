import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from '../common/Button'
import FinePrint from '../common/FinePrint'
import FloatingButtonContainer from '../common/FloatingButtonContainer'
import HeadlineUnderline from '../common/HeadlineUnderline'
import SectionBG from '../common/SectionBG'
import TextLink from '../common/TextLink'
import { capitalizeFirstLetter } from '../common/util'
import { personalityStyleData } from '../data/personalityStyleData'
import { ReactComponent as IntroImg } from '../img/happy_birthday.svg'
import ResultBar from './ResultBar'
import useResult from './useResult'

Result.propTypes = {
  questionnaireIds: PropTypes.string.isRequired,
  results: PropTypes.string.isRequired,
}

export default function Result({ questionnaireIds, results }) {
  const {
    sortedResultData,
    positiveStyles,
    positiveStyleNames,
    NumberOfCompletedQuestionnaires,
  } = useResult(questionnaireIds, results)

  return (
    <>
      <IntroImgStyled title="" />
      <HeadlineUnderline>
        <h1>Happy Birthday!</h1>
      </HeadlineUnderline>
      {positiveStyleNames.length === 0 && (
        <SmallH2>
          Die bereits getesteten Persönlichkeitsstile sind bei Ihnen nicht stark
          ausgeprägt.
        </SmallH2>
      )}
      <SmallH2>
        Alles Gute zum Geburtstag! <br></br> Das automatische
        Geburtstagsprognose hat folgende Werte für dein neues Lebensjahr
        ermittelt:{' '}
      </SmallH2>
      <section>
        {sortedResultData.map((result, index) => (
          <ResultSection>
            <ResultHeadline>
              {capitalizeFirstLetter(
                personalityStyleData[result.id - 1]?.adjective
              )}
            </ResultHeadline>
            <ResultBar
              percentage={
                result.yesCount === null ? null : (result.yesCount / 8) * 100
              }
              index={index}
            />
          </ResultSection>
        ))}
        {9 - results.length > 0 ? (
          <>
            {9 - results.length === 1 ? (
              <p>Es gibt noch 1 weiteren Fragebogen.</p>
            ) : (
              <p>
                Sie haben bereits Fragebögen zu{' '}
                <strong>{NumberOfCompletedQuestionnaires} von 9</strong>{' '}
                Persönlichkeitsstilen ausgefüllt. Häufig sind die ersten
                Fragebögen die relevantesten. Sie können noch weitere Fragebögen
                ausfüllen, um zu erfahren, wie stark die weiteren
                Persönlichkeitsstile bei Ihnen ausgeprägt sind. Manche Menschen
                haben wenige, dafür stark ausgeprägte Stile, andere mehrere,
                jeweils weniger stark ausgeprägte Stile.
              </p>
            )}
            <Link
              to={'/questionnaire/entry/' + questionnaireIds + '/' + results}
            >
              <Button>Weiteren Fragebogen starten</Button>
            </Link>
          </>
        ) : (
          <>
            <p></p>
            <BottomSpacer />
          </>
        )}
      </section>
      <SectionBG>
        <h3>Hinweis</h3>
        <p>
          Dieser Geburtstagsgruß stellt nur eine Tendenz dar und ersetzt keine
          professionelle Beratung. Wenn Sie sich unwohl fühlen, kontaktieren Sie
          bitte einen professionellen Clown.
          <br />
          <br />
        </p>
      </SectionBG>

      <BottomSpacer />
      <FinePrint>
        Tipp: Wir speichern Ihr Ergebnis nicht, aber Sie können sich diese Seite
        im Browser als Lesezeichen speichern, um diese Informationen erneut
        aufzurufen.
      </FinePrint>
      {results.length !== 9 && (
        <FloatingButtonContainer
          to={'/questionnaire/entry/' + questionnaireIds + '/' + results}
        >
          <Button>Weiteren Fragebogen starten</Button>
        </FloatingButtonContainer>
      )}
    </>
  )
}

const SmallH2 = styled.h2`
  font-size: 1em;
  margin-top: 0;
`

const IntroImgStyled = styled(IntroImg)`
  display: block;
  max-width: 300px;
  margin: 0 auto;
`

const ResultIntro = styled.p`
  margin-bottom: 40px;
`

const ResultSection = styled.section`
  margin-bottom: 20px;
`

const ResultHeadline = styled.h3`
  margin: 0 0 5px 0;
  text-align: left;
`
const TextLinkWithMargin = styled(TextLink)`
  margin: 15px 0;
`

const BottomSpacer = styled.div`
  margin-bottom: 40px;
`
