import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import BaseTable, { Column } from 'react-base-table'
import { VictoryChart, VictoryHistogram } from 'victory'

import * as actions from '../../redux/actions'
import * as selectors from '../../redux/selectors'

import 'react-base-table/styles.css'

const COLUMN_WIDTH = 100

// https://stackoverflow.com/questions/4187146/truncate-number-to-two-decimal-places-without-rounding
function toFixed(num, fixed) {
    var re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}

const rowRenderer = ({ cells, columns, rowData, ...rest }) => {
  if (typeof rowData['user_id'] === 'object') {
    return (
      <div style={{ display: 'flex' }}>
        {columns.map(({ title }) => <Summary key={title} {...rowData[title]}/>)}
      </div>
    )
  } else {
    return cells
  }
}

const Summary = ({ min, max, nulls, std, data }) => {
  return (
    <div style={{ width: COLUMN_WIDTH, height: '50%' }}>
      <VictoryChart>
        <VictoryHistogram bins={10} data={data.map(x => ({ x }))}/>
      </VictoryChart>
      <div>min: {toFixed(min, 2)}</div>
      <div>max: {toFixed(max, 2)}</div>
      <div>std: {toFixed(std, 2)}</div>
      <div>nulls: {nulls}</div>
    </div>
  )
}

const Dataset = () => {
  let { name } = useParams()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.setDataset(name))
  }, [dispatch, name])

  const onColumnSort = ({ key, order }) => {
    dispatch(actions.setSortBy({ key, order }))
  }

  const dataset = useSelector(selectors.sortedDatasetSelector)
  const columns = useSelector(selectors.columnsSelector)
  const summaries = useSelector(selectors.summariesSelector)
  const sortBy = useSelector(selectors.sortBySelector)

  const frozenData = [summaries]

  return (
    <BaseTable
      data={dataset}
      frozenData={frozenData}
      width={columns.length * COLUMN_WIDTH}
      height={600}
      rowHeight={100}
      sortBy={sortBy}
      onColumnSort={onColumnSort}
      rowRenderer={rowRenderer}
    >
      {columns.map(column =>
        <Column
          key={column}
          title={column}
          sortable
          dataKey={column}
          width={COLUMN_WIDTH}
        />)}
    </BaseTable>
  )
}

export default Dataset
