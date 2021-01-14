function findMatching(drivers, str) {
  str = str.toLowerCase()
  return drivers.filter(driver => driver.toLowerCase() === str)
}

function fuzzyMatch(drivers, str) {
  str = str.toLowerCase()
  return drivers.filter(driver => driver.toLowerCase().startsWith(str))
}

function matchName(drivers, str) {
  str = str.toLowerCase()
  return drivers.filter(driver => driver.name.toLowerCase() === str)
}