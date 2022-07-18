export function createReducer (initialState, handlers) {
  return function reducer (state = initialState, action) {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export function updateObject (oldObject, newValues) {
  return Object.assign({}, oldObject, newValues)
}

export function addToArray (array, newEntry) {
  return [...array, newEntry]
}

export function addAllToArray (array, newEntries) {
  return [...array, ...newEntries]
}

export function removeFromArray (array, entryId) {
  return array.filter((id) => id !== entryId)
}
