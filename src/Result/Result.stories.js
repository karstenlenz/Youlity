import React from 'react'
import Result from './Result'

export default {
  title: 'Result Selection',
  component: Result,
}

export const ResultComponent = () => (
  <Result
    resultData={[
      { id: 5, yesCount: 8 },
      { id: 3, yesCount: 4 },
    ]}
  />
)
