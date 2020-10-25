const makeConstant = constant => `dataset/${constant}`

export const FETCH_DATASET_LIST = makeConstant('FETCH_DATASET_LIST')
export const FETCH_DATASET_LIST_PENDING = makeConstant('FETCH_DATASET_LIST_PENDING')
export const FETCH_DATASET_LIST_SUCCESS = makeConstant('FETCH_DATASET_LIST_SUCCESS')
export const FETCH_DATASET_LIST_FAILED = makeConstant('FETCH_DATASET_LIST_FAILED')

export const FETCH_DATASET = makeConstant('FETCH_DATASET')
export const FETCH_DATASET_PENDING = makeConstant('FETCH_DATASET_PENDING')
export const FETCH_DATASET_SUCCESS = makeConstant('FETCH_DATASET_SUCCESS')
export const FETCH_DATASET_FAILED = makeConstant('FETCH_DATASET_FAILED')
