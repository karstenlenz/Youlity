import { styleData } from '../data/styleData'

export function evaluateMatchingStyles(userMotives) {
  const userStylesMatch = {}

  styleData.forEach((style) => {
    if (style.motives.includes(userMotives[0])) {
      let matchPoints = 5
      if (userMotives[0] === style.motives[0]) {
        matchPoints += 5
      }
      if (style.motives.includes(userMotives[1])) {
        matchPoints += 2.5
      }
      if (style.motives.includes(userMotives[2])) {
        matchPoints += 2.5
      }
      // compensate for different array lengths / specificity
      matchPoints = matchPoints * 5 + 30 / style.motives.length
      userStylesMatch[style.id] = matchPoints
    } else {
      userStylesMatch[style.id] = 0
    }
  })
  const sortedUserStyles = Object.keys(userStylesMatch).sort(
    (a, b) => userStylesMatch[b] - userStylesMatch[a]
  )
  const sortedUserStylesAsInts = sortedUserStyles.map((id) => parseInt(id))
  return sortedUserStylesAsInts
}
