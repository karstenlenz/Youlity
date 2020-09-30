import React from 'react'
import styled from 'styled-components/macro'
import GlobalStyles from '../src/GlobalStyles'
import './custom.css'

export const CUSTOM_VIEWPORTS = {
  mobile1: {
    name: 'Small mobile',
    styles: {
      height: '568px',
      width: '320px',
    },
    type: 'mobile',
  },
  iPhone6: {
    name: 'iPhone 6',
    styles: {
      height: '667px',
      width: '375px',
    },
    type: 'mobile',
  },
  mobile2: {
    name: 'Large mobile',
    styles: {
      height: '896px',
      width: '414px',
    },
    type: 'mobile',
  },
  tablet: {
    name: 'Tablet',
    styles: {
      height: '1112px',
      width: '834px',
    },
    type: 'tablet',
  },
  tablet: {
    name: 'Laptop',
    styles: {
      height: '768px',
      width: '1366px',
    },
    type: 'desktop',
  },
}

export const parameters = {
  layout: 'fullscreen',
  viewport: {
    viewports: CUSTOM_VIEWPORTS,
    defaultViewport: 'iPhone6',
  },
}

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <main>
        <Story />
      </main>
    </>
  ),
]
