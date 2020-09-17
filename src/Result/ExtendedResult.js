import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../common/Button'
import HeadlineUnderline from '../common/HeadlineUnderline'
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
      <p>
        Sie haben bisher folgende Fragebögen ausgefüllt. Klicken Sie auf einen
        Namen, um zu den Detail-Informationen zu gelangen.
      </p>
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
          <TextLink href="https://www.wege-zur-psychotherapie.org/">
            Infoseite "Wege zur Psychotherapie" &gt;
          </TextLink>
          <BottomSpacer />
        </>
      )}
    </>
  )
}

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
