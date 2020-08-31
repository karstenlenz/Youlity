import React from 'react'
import PropTypes from 'prop-types'

Motives.propTypes = {
  userMotives: PropTypes.arrayOf(PropTypes.string).isRequired,
  setUserMotives: PropTypes.func.isRequired,
}

export default function Motives({ userMotives, setUserMotives }) {
  return <p>Motives page will be added here</p>
}
