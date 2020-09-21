export function loadLocally(key) {
  const jsonString = localStorage.getItem(key)
  try {
    return JSON.parse(jsonString)
  } catch (error) {
    console.log(error)
    return null
  }
}

export function saveLocally(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}
