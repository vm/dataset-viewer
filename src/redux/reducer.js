import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

import * as actions from './actions'

import content from './data/content.csv'
import content_display from './data/content_display.csv'
import content_topic from './data/content_topic.csv'
import pageView from './data/page_view.csv'
import questions from './data/questions.csv'
import stock_portfolio_item from './data/stock_portfolio_item.csv'
import user from './data/user.csv'

const NAME_TO_DATASET = {
  content,
  content_display,
  content_topic,
  pageView,
  questions,
  stock_portfolio_item,
  user,
}

const dataset = handleActions({
  [actions.setDataset]: (state, action) => {
    return NAME_TO_DATASET[action.payload]
  },
}, content)

const sortBy = handleActions({
  [actions.setSortBy]: (state, action) => action.payload,
}, {})

export default combineReducers({
  dataset,
  sortBy,
})
