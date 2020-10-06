import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'

export default {
  title: 'Common/Header',
  component: Header,
}

export const HeaderExample = () => (
  <Router>
    <Header />
  </Router>
)
