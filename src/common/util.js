import { css } from 'styled-components'

export const breakpoints = (
  prop = 'padding', // the CSS property to apply to the breakpoints
  propUnit = 'px', // the units of the CSS property (can set equal to "" and apply units to values directly)
  values = [], // array of objects, e.g. [{ 800: 60 }, ...] <-- 800 (key) = screen breakpoint, 60 (value) = CSS prop breakpoint
  mediaQueryType = 'min-width' // media query breakpoint type, i.e.: max-width, min-width, max-height, min-height
) => {
  const breakpointProps = values.reduce((mediaQueries, value) => {
    const [screenBreakpoint, cssPropBreakpoint] = [
      Object.keys(value)[0],
      Object.values(value)[0],
    ]
    return (mediaQueries += `
    @media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
      ${prop}: ${cssPropBreakpoint}${propUnit};
    }
    `)
  }, '')
  return css([breakpointProps])
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
