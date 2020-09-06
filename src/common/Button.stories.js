import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

export const PrimaryBtn = (args) => <Button {...args}>Test starten</Button>
PrimaryBtn.args = { btnType: 'primary', isButtonDisabled: false }

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
