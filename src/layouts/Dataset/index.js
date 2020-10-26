import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import BaseTable, { Column } from 'react-base-table'
import { VictoryChart, VictoryHistogram } from 'victory'

import * as actions from '../../redux/actions'
import * as selectors from '../../redux/selectors'

import './index.css'
import 'react-base-table/styles.css'

const COLUMN_WIDTH = 120

const rowRenderer = ({ cells, columns, rowData, ...rest }) => {
  if (typeof rowData[columns[0].title] === 'object') {
    return (
      <div className="dataset-summary-container">
        {columns.map(({ title }) => <Summary key={title} {...rowData[title]}/>)}
      </div>
    )
  } else {
    return cells
  }
}

const Summary = ({ min, max, avg, std, data }) => {
  return (
    <div className="dataset-summary">
      <VictoryChart>
        <VictoryHistogram bins={10} data={data.map(x => ({ x }))}/>
      </VictoryChart>
      <div className="dataset-summary-group">
        <span>min: {min}</span>
        <span>max: {max}</span>
      </div>
      <div className="dataset-summary-group">
        <span>std: {std}</span>
        <span>avg: {avg}</span>
      </div>
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
    <>
      <Link to="/">Dataset List</Link>
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
    </>
  )
}

export default Dataset
