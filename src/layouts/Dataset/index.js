import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import * as actions from '../../redux/dataset/actions'
// import * as selectors from '../../redux/dataset/selectors'

const Dataset = () => {
  let { name } = useParams()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.fetchDataset(name))
  }, [dispatch, name])

  return (
    <div>
      {name}
    </div>
  )
}

export default Dataset
