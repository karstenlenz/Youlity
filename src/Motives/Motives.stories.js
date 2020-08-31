import React from 'react'
import Motives from './Motives'

export default {
  title: 'Motive Selection',
  component: Motives,
}

export const MotivesComponent = () => (
  <Motives
    userMotives={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
    setUserMotives={() => ''}
  />
)
