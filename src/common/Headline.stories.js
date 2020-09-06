import React from 'react'
import HeadlineUnderline from './HeadlineUnderline'

export default {
  title: 'Headline',
  component: HeadlineUnderline,
}

export const Headline = (args) => (
  <HeadlineUnderline {...args}>
    <h1>Test-Headline</h1>
  </HeadlineUnderline>
)
