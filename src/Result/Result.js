import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from '../common/Button'
import FinePrint from '../common/FinePrint'
import FloatingButtonContainer from '../common/FloatingButtonContainer'
import HeadlineUnderline from '../common/HeadlineUnderline'
import SectionBGWithButton from '../common/SectionBGWithButton'
import TextLink from '../common/TextLink'
import { capitalizeFirstLetter } from '../common/util'
import { personalityStyleData } from '../data/personalityStyleData'
import { ReactComponent as IntroImg } from '../img/style_info.svg'
import ResultBar from './ResultBar'
import ResultSummary from './ResultSummary'
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
        <h1>Ergebnis</h1>
      </HeadlineUnderline>
      {positiveStyleNames.length === 0 && (
        <SmallH2>
          Die bereits getesteten Persönlichkeitsstile sind bei Ihnen nicht stark
          ausgeprägt.
        </SmallH2>
      )}
      <ResultSummary {...{ positiveStyles }} />
      <ResultIntro>
        Hier sehen Sie die Ergebnisse der bisherigen Fragebögen.{' '}
        {results.length !== 9 &&
          'Füllen Sie weitere Fragebögen aus, um Ihr Profil zu schärfen.'}
        <br /> Klicken Sie auf einen Namen, um zu den Detail-Informationen mit
        hilfreichen Tipps zu gelangen.
      </ResultIntro>
      <section>
        {sortedResultData.map((result, index) => (
          <Link to={'/style-info/' + result.id} key={result.id}>
            <ResultSection>
              <ResultHeadline>
                {capitalizeFirstLetter(
                  personalityStyleData[result.id - 1]?.adjective
                )}{' '}
                {'>'}
              </ResultHeadline>
              <ResultBar
                percentage={
                  result.yesCount === null ? null : (result.yesCount / 8) * 100
                }
                index={index}
              />
            </ResultSection>
          </Link>
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
            <p>
              Sie haben die Fragebögen zu allen 9 Persönlichkeitsstilen
              ausgefüllt. Wir hoffen, dass Sie etwas Nützliches über Ihre
              Persönlichkeit mitnehmen konnten.
              <br />
              Wenn Sie noch mehr über sich erfahren wollen, nehmen Sie am besten
              Kontakt zu einem Psychotherapeuten auf.
            </p>
            <TextLinkWithMargin href="https://www.wege-zur-psychotherapie.org/">
              Infoseite "Wege zur Psychotherapie" &gt;
            </TextLinkWithMargin>
            <BottomSpacer />
          </>
        )}
      </section>

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
