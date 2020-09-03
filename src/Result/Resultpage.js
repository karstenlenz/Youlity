import React from 'react'
import Result from './Result'
import { useParams } from 'react-router-dom'

export default function Resultpage() {
  const { resultCode } = useParams()
  const resultArray = resultCode.split('')
  const resultData = [
    { id: resultArray[0], yesCount: resultArray[1] },
    { id: resultArray[2], yesCount: resultArray[3] },
  ]

  return <Result resultData={resultData} />
}
