import { personalityStyleData } from '../data/personalityStyleData'

export function evaluateMatchingStyles(userMotives) {
  const userPersonalityStyleIdsMatch = {}

  personalityStyleData.forEach((style) => {
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
      userPersonalityStyleIdsMatch[style.id] = matchPoints
    } else {
      userPersonalityStyleIdsMatch[style.id] = 0
    }
  })
  const sortedUserPersonalityStyleIds = Object.keys(
    userPersonalityStyleIdsMatch
  ).sort(
    (a, b) => userPersonalityStyleIdsMatch[b] - userPersonalityStyleIdsMatch[a]
  )
  const sortedUserPersonalityStyleIdsAsInts = sortedUserPersonalityStyleIds.map(
    (id) => parseInt(id)
  )
  return sortedUserPersonalityStyleIdsAsInts
}
