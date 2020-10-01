import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import JournalList from './JournalList'

export default {
  title: 'JournalList',
  component: JournalList,
  argTypes: {
    deleteJournalEntry: { action: 'deleted' },
    journalEntries: {
      control: {
        type: 'array',
      },
    },
  },
}

export const JournalListExample = (args) => (
  <BrowserRouter>
    <JournalList {...args}></JournalList>
  </BrowserRouter>
)
JournalListExample.args = {
  journalEntries: [
    {
      id: '123',
      date: '30.09.2020',
      title: 'Beispiel-Titel',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat facere accusantium explicabo esse dolorem ducimus nostrum numquam nobis earum molestias, iusto id eos doloribus ad aperiam magni. Hic blanditiis ipsum omnis officiis et quidem totam error, repellat beatae esse, ab placeat soluta nobis pariatur voluptatibus ducimus modi nulla eveniet neque.',
    },
  ],
}
