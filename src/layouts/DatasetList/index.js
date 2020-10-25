import React from 'react'
import { Link } from 'react-router-dom'

const DATASET_LIST = [
  {
    name: 'content',
    rowCount: 10000
  },
  {
    name: 'content_display',
    rowCount: 10000
  },
  {
    name: 'content_topic',
    rowCount: 10000
  },
  {
    name: 'page_view',
    rowCount: 10000
  },
  {
    name: 'questions',
    rowCount: 10000
  },
  {
    name: 'stock_portfolio_item',
    rowCount: 10000
  },
  {
    name: 'user',
    rowCount: 10000
  }
]

const DatasetList = () => {
  return (
    <div>
      {DATASET_LIST
        .map(({ name, rowCount }) => (
          <div key={name}>
            <Link to={`/dataset/${name}`}>
              {name}
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default DatasetList
