import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    btnType: { control: 'enum', options: ['primary', 'secondary', 'white'] },
    isButtonDisabled: { control: 'bool' },
    args: {
      btnType: 'primary',
      isButtonDisabled: false,
    },
  },
}

export const PrimaryBtn = () => <Button btnType="primary">Test starten</Button>

export const PrimaryBtnDisabled = (args) => (
  <Button {...args}>Test starten</Button>
)

PrimaryBtnDisabled.args = { isButtonDisabled: true }

export const SecondaryBtn = (args) => <Button {...args}>Test starten</Button>
SecondaryBtn.args = { btnType: 'secondary' }

export const SecondaryBtnDisabled = (args) => (
  <Button {...args}>Test starten</Button>
)
SecondaryBtnDisabled.args = { btnType: 'secondary', isButtonDisabled: true }

export const WhiteBtn = (args) => <Button {...args}>Test starten</Button>
WhiteBtn.args = { btnType: 'white' }

export const WhiteBtnDisabled = (args) => (
  <Button {...args}>Test starten</Button>
)
WhiteBtnDisabled.args = { btnType: 'white', isButtonDisabled: true }
