import { createAction } from 'redux-actions'

import * as constants from './constants'

export const setDataset = createAction(constants.SET_DATASET)
export const setSortBy = createAction(constants.SET_SORT_BY)
