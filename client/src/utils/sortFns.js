export const sortItemByAlphha = (a, b) => {
  var nameA = a.routeLink.toUpperCase()
  var nameB = b.routeLink.toUpperCase()
  if (nameA < nameB) {
    return -1
  }
  if (nameA > nameB) {
    return 1
  }
  // names must be equal
  return 0
}

export const stateSortItemByAlphha = (a, b) => {
  var nameA = a.displayName.toUpperCase()
  var nameB = b.displayName.toUpperCase()
  if (nameA < nameB) {
    return -1
  }
  if (nameA > nameB) {
    return 1
  }
  // names must be equal
  return 0
}
