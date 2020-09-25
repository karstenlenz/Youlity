import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from '../common/Button'
import HeadlineUnderline from '../common/HeadlineUnderline'
import SectionBGWithButton from '../common/SectionBGWithButton'
import TextLink from '../common/TextLink'
import { capitalizeFirstLetter } from '../common/util'
import { personalityStyleData } from '../data/personalityStyleData'
import ResultBar from './ResultBar'
import useResults from './useResults'

ExtendedResult.propTypes = {
  questionnaireIds: PropTypes.string.isRequired,
  results: PropTypes.string.isRequired,
}

export default function ExtendedResult({ questionnaireIds, results }) {
  const resultData = useResults(questionnaireIds, results)
  const sortedResultData = resultData
    .slice()
    .sort((a, b) => b.yesCount - a.yesCount)
  return (
    <>
      <img src="/img/style_info.svg" alt="" />
      <HeadlineUnderline>
        <h1>Ergebnis</h1>
      </HeadlineUnderline>
      <IntroText>
        Sie haben bisher folgende Fragebögen ausgefüllt. Klicken Sie auf einen
        Namen, um zu den Detail-Informationen zu gelangen.
      </IntroText>
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
                percentage={(result.yesCount / 8) * 100}
                index={index}
              />
            </ResultSection>
          </Link>
        ))}
      </section>

      {9 - results.length > 0 ? (
        <>
          {9 - results.length === 1 ? (
            <p>Es gibt noch 1 weiteren Fragebogen.</p>
          ) : (
            <p>Es gibt noch {9 - results.length} weitere Fragebögen.</p>
          )}
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
          <BottomSpacer />
        </>
      )}
    </>
  )
}

const IntroText = styled.p`
  margin-bottom: 15px;
`
const TextLinkWithMargin = styled(TextLink)`
  margin: 15px 0;
`

const BottomSpacer = styled.div`
  margin-bottom: 40px;
`

const ResultSection = styled.section`
  margin-bottom: 20px;
`

const ResultHeadline = styled.h3`
  margin: 0 0 5px 0;
  text-align: left;
`
