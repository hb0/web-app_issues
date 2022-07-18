import { createReducer, updateObject } from './utils.js'

const initialState = {
  time: {
    active: false,
    from: null,
    to: null
  }
}

const datasetsViewReducer = createReducer(initialState, {
  UPDATE_DATASETS_VIEW: updateDatasetsView
})

function updateDatasetsView (datasetsViewState, action) {
  return updateObject(datasetsViewState, action.update)
}

export default datasetsViewReducer
