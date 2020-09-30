import React from 'react'
import JournalCard from './JournalCard'

export default {
  title: 'JournalCard',
  component: JournalCard,
  argTypes: {
    handleDelete: { action: 'deleted' },
    date: {
      control: {
        type: 'text',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
  },
}

export const JournalCardExample = (args) => (
  <JournalCard {...args}></JournalCard>
)

JournalCardExample.args = {
  date: '21.09.2020',
  title: 'Beispiel-Titel',
  description:
    'Beispieltext Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita esse repellat, dolorem numquam alias velit, pariatur quisquam veniam explicabo sint, id quibusdam quo. Cumque quia voluptatem doloribus est porro delectus nam dolorum a deserunt quas tempore inventore culpa ullam corrupti voluptas libero in ratione iusto, explicabo ducimus aut praesentium eos?',
}
