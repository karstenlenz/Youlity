import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import MotiveButtons from './MotiveButtons'

Motives.propTypes = {
  userMotives: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleMotiveClick: PropTypes.func.isRequired,
}

export default function Motives({ userMotives, handleMotiveClick }) {
  const history = useHistory()

  useEffect(() => {
    userMotives.length === 3 && history.push('/questionnaire')
  }, [userMotives, history])

  return (
    <>
      <h1>Bedürfnisse</h1>
      <h2>
        Bitte wählen Sie die 3 Bedürfnisse aus, die Ihnen am wichtigsten sind.
        Fangen Sie mit dem wichtigsten an.
      </h2>
      <ol>
        <li> {userMotives[0]} </li>
        <li> {userMotives[1]} </li>
        <li> {userMotives[2]} </li>
      </ol>
      <MotiveButtons handleMotiveClick={handleMotiveClick} />
    </>
  )
}
