import React from 'react'
import Button from './Button'
import Collapse from './Collapse'

export default {
  title: 'Collapse',
  component: Collapse,
  argTypes: {
    headline: {
      control: {
        type: 'text',
      },
    },
    headlineOpen: {
      control: {
        type: 'text',
      },
    },
  },
}

export const CollapseExample = (args) => (
  <Collapse {...args}>Beispieltext für Collapse</Collapse>
)
CollapseExample.args = {
  headline: 'Jetzt is es zu',
  headlineOpen: 'Jetzt ist es offen',
}
