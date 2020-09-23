import { useEffect, useState } from 'react'

export default function useQuestionnaire(questionSets, handleResults) {
  const [questionRound, setQuestionRound] = useState(0)
  const questions = questionSets[questionRound] ?? []
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [results, setResults] = useState([])

  const [cardOffset, setCardOffset] = useState(0)
  const swipeThreshold = 50

  const [isInputDisabled, setIsInputDisabled] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsInputDisabled(false)
    }, 100)
  }, [answers])

  function handleAnswer(answer) {
    setIsInputDisabled(true)
    if (currentQuestionIndex === questions.length - 1) {
      if (questionRound === questionSets.length - 1) {
        handleResults([...results, countYes([...answers, answer])])
      } else {
        setResults([...results, countYes([...answers, answer])])
        setQuestionRound(questionRound + 1)
        setCurrentQuestionIndex(0)
        setAnswers([])
      }
    } else {
      setAnswers([...answers, answer])
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  return {
    questions,
    questionRound,
    currentQuestionIndex,
    isInputDisabled,
    swipeThreshold,
    cardOffset,
    setCardOffset,
    handleAnswer,
  }
}

export function countYes(answers) {
  return answers.reduce((yesCount, answer) => {
    return answer ? yesCount + 1 : yesCount
  }, 0)
}
