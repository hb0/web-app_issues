import { combineReducers } from '@reduxjs/toolkit'
import datasetsView from './datasetsView.js'
import infrastructureView from './infrastructureView.js'

const rootReducer = combineReducers({
  datasetsView,
  infrastructureView
})

export default rootReducer
