import { createSelector } from 'reselect'

const datasetSelector = state => state.dataset
export const columnsSelector = createSelector(
  datasetSelector,
  dataset => Object.keys(dataset[0])
)

export const computedDatasetSelector = datasetSelector
