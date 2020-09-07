import React from 'react'
import HeadlineUnderline from './HeadlineUnderline'

export default {
  title: 'Headline',
  component: HeadlineUnderline,
}

export const Headline1 = (args) => (
  <HeadlineUnderline {...args}>
    <h1>{args.text}</h1>
  </HeadlineUnderline>
)
Headline1.args = { text: 'Headline 1' }

export const Headline2 = (args) => (
  <HeadlineUnderline {...args}>
    <h2>{args.text}</h2>
  </HeadlineUnderline>
)
Headline2.args = { text: 'Headline 2' }

export const Headline3 = (args) => <h3>{args.text}</h3>
Headline3.args = { text: 'Headline 3' }

export const Headline4 = (args) => <h4>{args.text}</h4>
Headline4.args = { text: 'Headline 4' }

export const Headline5 = (args) => <h5>{args.text}</h5>
Headline5.args = { text: 'Headline 5' }

export const Headline6 = (args) => <h6>{args.text}</h6>
Headline6.args = { text: 'Headline 6' }
