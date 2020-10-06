import React from 'react'
import Button from './Button'

export default {
  title: 'Common/Button',
  component: Button,
  argTypes: {
    isButtonDisabled: {
      control: {
        type: 'boolean',
      },
    },
    btnType: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'white'],
      },
    },
    onClick: {
      table: { disable: true },
    },
    children: {
      control: { type: 'text' },
    },
  },
}

export const PrimaryBtn = (args) => <Button {...args}></Button>
PrimaryBtn.args = {
  btnType: 'primary',
  isButtonDisabled: false,
  children: 'Test starten',
}

export const PrimaryBtnDisabled = (args) => <Button {...args}></Button>
PrimaryBtnDisabled.args = { isButtonDisabled: true, children: 'Test starten' }

export const SecondaryBtn = (args) => <Button {...args}></Button>
SecondaryBtn.args = { btnType: 'secondary', children: 'Test starten' }

export const SecondaryBtnDisabled = (args) => <Button {...args}></Button>
SecondaryBtnDisabled.args = {
  btnType: 'secondary',
  isButtonDisabled: true,
  children: 'Test starten',
}

export const WhiteBtn = (args) => <Button {...args}></Button>
WhiteBtn.args = { btnType: 'white', children: 'Test starten' }

export const WhiteBtnDisabled = (args) => <Button {...args}></Button>
WhiteBtnDisabled.args = {
  btnType: 'white',
  isButtonDisabled: true,
  children: 'Test starten',
}
