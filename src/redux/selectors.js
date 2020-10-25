import { SortOrder } from 'react-base-table'
import { createSelector } from 'reselect'
import { prop, isNil, isEmpty, sort, ascend, descend } from 'ramda'

const datasetSelector = state => state.dataset
export const columnsSelector = createSelector(
  datasetSelector,
  dataset => Object.keys(dataset[0])
)

export const sortBySelector = state => state.sortBy

export const summariesSelector = createSelector(
  datasetSelector,
  columnsSelector,
  (dataset, columns) => {
    let summaries = {}
    columns.forEach(column => {
      const columnData = dataset.map(prop(column))
      const summary = {
        min: Math.min(columnData),
        max: Math.max(columnData),
        nullCount: columnData.filter(isNil).length,
      }
      summaries[column] = summary
    })
    return summaries
  },
)

export const sortedDatasetSelector = createSelector(
  datasetSelector,
  sortBySelector,
  (dataset, sortBy) => {
    if (isEmpty(sortBy)) {
      return dataset
    } else if (sortBy.order === SortOrder.ASC) {
      return sort(ascend(prop(sortBy.key)), dataset)
    } else {
      return sort(descend(prop(sortBy.key)), dataset)
    }
  },
)
