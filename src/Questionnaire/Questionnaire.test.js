import { render } from '@testing-library/react'
import React from 'react'
import Questionnaire from './Questionnaire'
import { countYes } from './useQuestionnaire'

describe('The questionnaire component', () => {
  it('renders correctly', () => {
    const handleResults = jest.fn()
    const { container } = render(
      <Questionnaire
        handleResults={handleResults}
        questionSets={[
          [
            'Brauchen Sie in hohem Maße Lob und Anerkennung?',
            'Möchten Sie besser sein als andere?',
            'Reagieren Sie empfindlich auf Kritik, selbst wenn diese berechtigt ist?',
            'Haben Sie ab und zu Phasen, in denen Sie an Ihren Fähigkeiten, Erfolgen etc. zweifeln?',
            'Erleben Sie Phasen, in denen Sie sehr zufrieden mit sich sind und denken, dass Sie gut sind?',
            'Haben Sie die Tendenz, in besonderer Weise behandelt werden zu wollen?',
            'Haben Sie deutliche Erwartungen, an die sich andere halten sollten, z. B. Sie nicht zu behindern u. a.?',
            'Neigen Sie dazu, andere Personen „einzuspannen“, ihnen Aufgaben zu geben, die Sie eigentlich selbst erledigen sollten?',
          ],
          [
            'Liegt Ihnen viel daran, dass Sie für andere Personen wichtig sind, dass Sie in deren Leben eine Rolle spielen?',
            'Freuen Sie sich, wenn andere Ihnen Aufmerksamkeit schenken, sich für Sie interessieren, sich kümmern u. a.?',
            'Tun Sie relativ viel dafür, um gut auszusehen, einen „guten Eindruck“ zu machen, attraktiv zu sein?',
            'Stehen Sie gerne im Mittelpunkt, können Sie es genießen, wenn viele Personen Ihnen zuhören?',
            'Ärgert es Sie extrem, wenn Sie jemandem etwas erzählen und Ihr Gegenüber hört Ihnen nicht (richtig) zu?',
            'Erwarten Sie, dass ein Partner genau das tut, was Sie von ihm erwarten, und werden Sie wütend, wenn er das nicht tut?',
            'Flirten Sie gerne und sind Sie manchmal in der Versuchung, eine Affäre einzugehen?',
            'Haben Sie den Eindruck, dass Sie sich schnell in positive, aber auch in negative Gefühle „hineinsteigern“ können?',
          ],
        ]}
      />
    )
    expect(container).toMatchSnapshot()
  })
})

describe('countYes', () => {
  it('counts all the yesses', () => {
    const testAnswers = [true, true, true, true, true, true, true, true]
    const result = countYes(testAnswers)
    expect(result).toEqual(8)
  })

  it('doesnt count all the noes', () => {
    const testAnswers = [false, false, false, false, false, false, false, false]
    const result = countYes(testAnswers)
    expect(result).toEqual(0)
  })

  it('only counts the yesses', () => {
    const testAnswers = [false, true, false, true, true, false, false, false]
    const result = countYes(testAnswers)
    expect(result).toEqual(3)
  })
})
