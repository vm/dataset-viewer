import { SortOrder } from 'react-base-table'
import { createSelector } from 'reselect'
import { mean, prop, is, isEmpty, sort, ascend, descend } from 'ramda'
import * as math from 'mathjs'

// https://stackoverflow.com/questions/4187146/truncate-number-to-two-decimal-places-without-rounding
function toFixed(num, fixed) {
    var re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}

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
      const columnData = dataset.map(row => {
        const cell = row[column]
        if (is(Number, cell)) {
          return cell
        } else {
          return cell.length
        }
      })
      const summary = {
        min: toFixed(Math.min(...columnData), 1),
        max: toFixed(Math.max(...columnData), 1),
        std: toFixed(math.std(columnData), 1),
        avg: toFixed(mean(columnData), 1),
        data: columnData,
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
