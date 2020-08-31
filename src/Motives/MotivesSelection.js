import React, { useState, useEffect } from 'react'

export default function PersonalityTest() {
  const styleData = [
    {
      id: 1,
      name: 'Der narzisstische Persönlichkeitsstil',
      motives: ['Anerkennung', 'Autonomie', 'Solidarität', 'Wichtigkeit'],
    },
    {
      id: 2,
      name: 'Der histrionische Persönlichkeitsstil',
      motives: ['Wichtigkeit', 'Solidarität', 'Verlässlichkeit'],
    },
    {
      id: 3,
      name: 'Der dependente Persönlichkeitsstil',
      motives: ['Verlässlichkeit', 'Solidarität'],
    },
    {
      id: 4,
      name: 'Der selbstunsichere Persönlichkeitsstil',
      motives: ['Anerkennung', 'Wichtigkeit'],
    },
    {
      id: 5,
      name: 'Der passiv-aggressive Persönlichkeitsstil',
      motives: ['Grenzen', 'Autonomie', 'Anerkennung'],
    },
    {
      id: 6,
      name: 'Der schizoide Persönlichkeitsstil',
      motives: ['Solidarität', 'Verlässlichkeit', 'Wichtigkeit', 'Anerkennung'],
    },
    {
      id: 7,
      name: 'Der zwanghafte Persönlichkeitsstil',
      motives: ['Autonomie', 'Anerkennung', 'Wichtigkeit', 'Solidarität'],
    },
    {
      id: 8,
      name: 'Der paranoide Persönlichkeitsstil',
      motives: ['Anerkennung', 'Grenzen', 'Autonomie', 'Solidarität'],
    },
    {
      id: 9,
      name: 'Der Borderline-Persönlichkeitsstil',
      motives: [
        'Anerkennung',
        'Wichtigkeit',
        'Verlässlichkeit',
        'Solidarität',
        'Autonomie',
        'Grenzen',
      ],
    },
  ]

  const styleMap = [
    'Der narzisstische Persönlichkeitsstil',
    'Der histrionische Persönlichkeitsstil',
    'Der dependente Persönlichkeitsstil',
    'Der selbstunsichere Persönlichkeitsstil',
    'Der passiv-aggressive Persönlichkeitsstil',
    'Der schizoide Persönlichkeitsstil',
    'Der zwanghafte Persönlichkeitsstil',
    'Der paranoide Persönlichkeitsstil',
    'Der Borderline-Persönlichkeitsstil',
  ]

  const [userMotives, setUserMotives] = useState([])
  const [userStyles, setUserStyles] = useState([])
  useEffect(() => {
    evaluateStyles(userMotives)
  }, [userMotives])

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          const motiveForm = event.target
          setUserMotives([
            motiveForm.motive1.value,
            motiveForm.motive2.value,
            motiveForm.motive3.value,
          ])
        }}
      >
        <input name="motive1" placeholder="Motiv 1"></input>
        <input name="motive2" placeholder="Motiv 2"></input>
        <input name="motive3" placeholder="Motiv 3"></input>
        <button>Persönlichkeitsstile berechnen</button>
      </form>
      <h2> Deine Top 3 </h2>
      <ol>
        <li>{styleMap[userStyles[0] - 1]}</li>
        <li>{styleMap[userStyles[1] - 1]}</li>
        <li>{styleMap[userStyles[2] - 1]}</li>
      </ol>
    </>
  )

  function evaluateStyles(userMotives) {
    if (userMotives.length === 3) {
      const userStyles = {}
      styleData.forEach((style) => {
        if (style.motives.includes(userMotives[0])) {
          let matchPoints = 5
          if (userMotives[0] === style.motives[0]) {
            matchPoints += 5
          }
          if (style.motives.includes(userMotives[1])) {
            matchPoints += 2.5
          }
          if (style.motives.includes(userMotives[2])) {
            matchPoints += 2.5
          }
          // compensate for different array lengths / specificity
          matchPoints = matchPoints * 5 + 30 / style.motives.length
          userStyles[style.id] = matchPoints
        } else {
          userStyles[style.id] = 0
        }
      })
      const sortedUserStyles = Object.keys(userStyles).sort(
        (a, b) => userStyles[a] < userStyles[b]
      )
      console.log(userStyles)
      console.log('sortedUserStyles: ' + sortedUserStyles)
      setUserStyles(sortedUserStyles)
    }
  }
}
