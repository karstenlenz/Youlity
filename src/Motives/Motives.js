import React from 'react'
import PropTypes from 'prop-types'

Motives.propTypes = {
  userMotives: PropTypes.arrayOf(PropTypes.string).isRequired,
  setUserMotives: PropTypes.func.isRequired,
}

export default function Motives({ userMotives, setUserMotives }) {
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

      <section>
        <button onClick={(event) => handleClick(event, 'Anerkennung')}>
          Anerkennung
        </button>
        <button onClick={(event) => handleClick(event, 'Wichtigkeit')}>
          Wichtigkeit
        </button>
        <button onClick={(event) => handleClick(event, 'Verlässlichkeit')}>
          Verlässlichkeit
        </button>
        <button onClick={(event) => handleClick(event, 'Solidarität')}>
          Solidarität
        </button>
        <button onClick={(event) => handleClick(event, 'Autonomie')}>
          Autonomie
        </button>
        <button onClick={(event) => handleClick(event, 'Grenzen')}>
          Grenzen
        </button>
      </section>
    </>
  )

  function handleClick(event, motive) {
    const button = event.target
    button.disabled = true
    setUserMotives([...userMotives, motive])
  }
}
