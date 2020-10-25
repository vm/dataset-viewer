import { createAction } from 'redux-actions'

import * as constants from './constants'

export const fetchDatasetList = createAction(constants.FETCH_DATASET_LIST)
export const fetchDatasetListPending = createAction(constants.FETCH_DATASET_LIST_PENDING)
export const fetchDatasetListSuccess = createAction(constants.FETCH_DATASET_LIST_SUCCESS)
export const fetchDatasetListFailed = createAction(constants.FETCH_DATASET_LIST_FAILED)

export const fetchDataset = createAction(constants.FETCH_DATASET)
export const fetchDatasetPending = createAction(constants.FETCH_DATASET_PENDING)
export const fetchDatasetSuccess = createAction(constants.FETCH_DATASET_SUCCESS)
export const fetchDatasetFailed = createAction(constants.FETCH_DATASET_FAILED)
