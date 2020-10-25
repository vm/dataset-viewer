import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import * as actions from '../../redux/dataset/actions'
import * as selectors from '../../redux/dataset/selectors'

const DatasetList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.fetchDatasetList())
  }, [dispatch])

  const datasetList = useSelector(selectors.datasetListSelector)

  return (
    <div>
      {datasetList
        .map(dataset => (
          <div key={dataset.name}>
            <Link to={`/dataset/${dataset.name}`}>
              {dataset.name}
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default DatasetList
