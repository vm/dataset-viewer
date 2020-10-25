import { combineReducers } from 'redux'
import { combineActions } from 'redux-actions'

import { handleActions } from '../utils'

import * as actions from './actions'

const datasetList = handleActions({
}, false)

const fetchDatasetListStatus = handleActions({
  [combineActions(
    actions.fetchDatasetListPending,
    actions.fetchDatasetListSuccess,
    actions.fetchDatasetListFailed,
  )]: (state, action) => action.type,
}, false)

const currentDataset = handleActions({
  [actions.fetchDatasetSuccess]: (action, payload) => {
    return action.payload
  },
}, false)

const fetchDatasetStatus = handleActions({
  [combineActions(
    actions.fetchDatasetPending,
    actions.fetchDatasetSuccess,
    actions.fetchDatasetFailed,
  )]: (state, action) => action.type,
}, false)

export default combineReducers({
  datasetList,
  fetchDatasetListStatus,
  currentDataset,
  fetchDatasetStatus,
})
