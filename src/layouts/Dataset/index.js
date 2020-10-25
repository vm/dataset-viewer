import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import BaseTable, { Column } from 'react-base-table'

import * as actions from '../../redux/actions'
import * as selectors from '../../redux/selectors'

import 'react-base-table/styles.css'

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

  return (
    <BaseTable
      data={dataset}
      width={1000}
      height={600}
      sortBy={sortBy}
      onColumnSort={onColumnSort}
    >
      {columns.map(column =>
        <Column
          key={column}
          title={column}
          sortable
          dataKey={column}
          width={100}
        />)}
    </BaseTable>
  )
}

export default Dataset
