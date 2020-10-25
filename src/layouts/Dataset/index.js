import React from 'react'
import { useParams } from 'react-router-dom'

const Dataset = () => {
  let { name } = useParams()

  return (
    <div>
      {name}
    </div>
  )
}

export default Dataset
