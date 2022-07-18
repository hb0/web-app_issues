import { createReducer, updateObject } from './utils.js'
import { Options } from '../components/InfrastructureView.js'

const initialState = {
  option: Options.All
}

const infrastructureViewReducer = createReducer(initialState, {
  UPDATE_INFRASTRUCTURE_VIEW: updateInfrastructureView
})

function updateInfrastructureView (infrastructureViewState, action) {
  return updateObject(infrastructureViewState, action.update)
}

export default infrastructureViewReducer
