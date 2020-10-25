import { createSelector } from 'reselect'

export const datasetListSelector = state => state.dataset.datasetList

const currentDatasetSelector = state => state.dataset.currentDataset
