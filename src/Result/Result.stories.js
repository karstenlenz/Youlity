import React from 'react'
import Result from './Result'

export default {
  title: 'Result Selection',
  component: Result,
}

export const ResultComponent = () => (
  <Result userMotives={[1, 2, 3, 4, 5, 6, 7, 8, 9]} setUserMotives={() => ''} />
)
