import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import GlobalStyles from './GlobalStyles'
import GlobalFonts from './GlobalFonts'
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from './common/ScrollToTop'

ReactDOM.render(
  <>
    <GlobalStyles />
    <GlobalFonts />
    <React.StrictMode>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </React.StrictMode>
  </>,
  document.getElementById('root')
)

serviceWorker.register()
