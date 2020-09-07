import React from 'react'
import styled from 'styled-components'
import InfoOverlay from '../common/InfoOverlay'
import Button from '../common/Button'

export default function MotiveButtons({ handleMotiveClick }) {
  const motiveData = [
    {
      name: 'Anerkennung',
      description: () => {
        return (
          <>
            <p>
              Das Bedürfnis nach Anerkennung bedeutet, Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Ipsum sit quod accusantium
              voluptatibus tenetur dolor? Necessitatibus, debitis unde
              repellendus non cupiditate doloribus? Accusantium debitis
              temporibus vel aut, consectetur distinctio! Obcaecati eum vel
              natus mollitia voluptatibus ullam quae esse sit tempora.
            </p>
            <ul>
              <li>„Du bist als lorem“</li>
              <li>„Du bist ipsum.“</li>
              <li>„Du siehst dolor aus.“</li>
              <li>„Du bist sit.“</li>
            </ul>
          </>
        )
      },
    },
    {
      name: 'Wichtigkeit',
      description: () => {
        return (
          <>
            <p>
              Das Bedürfnis nach Wichtigkeit bedeutet, Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Ipsum sit quod accusantium
              voluptatibus tenetur dolor? Necessitatibus, debitis unde
              repellendus non cupiditate doloribus? Accusantium debitis
              temporibus vel aut, consectetur distinctio! Obcaecati eum vel
              natus mollitia voluptatibus ullam quae esse sit tempora.
            </p>
            <ul>
              <li>„Du bist als lorem“</li>
              <li>„Du bist ipsum.“</li>
              <li>„Du siehst dolor aus.“</li>
              <li>„Du bist sit.“</li>
            </ul>
          </>
        )
      },
    },
    {
      name: 'Solidarität',
      description: () => {
        return (
          <>
            <p>
              Das Bedürfnis nach Solidarität bedeutet, Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Ipsum sit quod accusantium
              voluptatibus tenetur dolor? Necessitatibus, debitis unde
              repellendus non cupiditate doloribus? Accusantium debitis
              temporibus vel aut, consectetur distinctio! Obcaecati eum vel
              natus mollitia voluptatibus ullam quae esse sit tempora.
            </p>
            <ul>
              <li>„Du bist als lorem“</li>
              <li>„Du bist ipsum.“</li>
              <li>„Du siehst dolor aus.“</li>
              <li>„Du bist sit.“</li>
            </ul>
          </>
        )
      },
    },
    {
      name: 'Autonomie',
      description: () => {
        return (
          <>
            <p>
              Das Bedürfnis nach Autonomie bedeutet, Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Ipsum sit quod accusantium
              voluptatibus tenetur dolor? Necessitatibus, debitis unde
              repellendus non cupiditate doloribus? Accusantium debitis
              temporibus vel aut, consectetur distinctio! Obcaecati eum vel
              natus mollitia voluptatibus ullam quae esse sit tempora.
            </p>
            <ul>
              <li>„Du bist als lorem“</li>
              <li>„Du bist ipsum.“</li>
              <li>„Du siehst dolor aus.“</li>
              <li>„Du bist sit.“</li>
            </ul>
          </>
        )
      },
    },
    {
      name: 'Grenzen',
      description: () => {
        return (
          <>
            <p>
              Das Bedürfnis nach Grenzen bedeutet, Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Ipsum sit quod accusantium
              voluptatibus tenetur dolor? Necessitatibus, debitis unde
              repellendus non cupiditate doloribus? Accusantium debitis
              temporibus vel aut, consectetur distinctio! Obcaecati eum vel
              natus mollitia voluptatibus ullam quae esse sit tempora.
            </p>
            <ul>
              <li>„Du bist als lorem“</li>
              <li>„Du bist ipsum.“</li>
              <li>„Du siehst dolor aus.“</li>
              <li>„Du bist sit.“</li>
            </ul>
          </>
        )
      },
    },
    {
      name: 'Verlässlichkeit',
      description: () => {
        return (
          <>
            <p>
              Das Bedürfnis nach Grenzen bedeutet, Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Ipsum sit quod accusantium
              voluptatibus tenetur dolor? Necessitatibus, debitis unde
              repellendus non cupiditate doloribus? Accusantium debitis
              temporibus vel aut, consectetur distinctio! Obcaecati eum vel
              natus mollitia voluptatibus ullam quae esse sit tempora.
            </p>
            <ul>
              <li>„Du bist als lorem“</li>
              <li>„Du bist ipsum.“</li>
              <li>„Du siehst dolor aus.“</li>
              <li>„Du bist sit.“</li>
            </ul>
          </>
        )
      },
    },
  ]

  return (
    <ButtonList>
      {motiveData.map((motive) => {
        return (
          <ButtonPair key={motive.name}>
            <Button
              btnType="white"
              onClick={(event) => handleMotiveClick(event, motive.name)}
            >
              {motive.name}
            </Button>
            <InfoOverlay>{motive.description()}</InfoOverlay>
          </ButtonPair>
        )
      })}
    </ButtonList>
  )
}

const ButtonPair = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`

const ButtonList = styled.section`
  display: flex;
  flex-direction: column;
`

const MotiveButton = styled.button`
  display: block;
  padding: 10px;
  width: 100%;
  font-size: 18px;
  margin-right: 20px;
`
