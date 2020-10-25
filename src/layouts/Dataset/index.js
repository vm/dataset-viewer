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

  const dataset = useSelector(selectors.computedDatasetSelector)
  const columns = useSelector(selectors.columnsSelector)

  return (
    <BaseTable data={dataset} width={1000} height={600}>
      {[columns.map(column => <Column key={column} dataKey={column} width={100}/>)]}
    </BaseTable>
  )
}

export default Dataset
