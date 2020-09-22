import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Result from './Result'

export default {
  title: 'Result',
  component: Result,
}

export const ResultComponent = () => (
  <Router>
    <Result questionnaireIds="192837465" results="73" />
  </Router>
)
