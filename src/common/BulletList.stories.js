import React from 'react'
import BulletList from './BulletList'

export default {
  title: 'Common/BulletList',
  component: BulletList,
  argTypes: {
    listType: {
      control: {
        type: 'radio',
        options: ['bullet_checkmark', 'bullet_circle'],
      },
    },
  },
}

export const CircleList = (args) => (
  <BulletList {...args}>
    <li>Lorem Ipsum</li>
    <li>Dolor Sit</li>
    <li>Consequetur</li>{' '}
  </BulletList>
)
CircleList.args = { listType: 'bullet_circle' }

export const CheckmarkList = (args) => (
  <BulletList {...args}>
    <li>Lorem Ipsum</li>
    <li>Dolor Sit</li>
    <li>Consequetur</li>{' '}
  </BulletList>
)
CheckmarkList.args = { listType: 'bullet_checkmark' }
