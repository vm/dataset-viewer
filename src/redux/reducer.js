import { handleActions } from 'redux-actions'

import * as actions from './actions'

import content from './data/content.csv'
import contentDisplay from './data/content_display.csv'
import contentTopic from './data/content_topic.csv'
import pageView from './data/page_view.csv'
import questions from './data/questions.csv'
import stockPortfolioItem from './data/stock_portfolio_item.csv'
import user from './data/user.csv'

const NAME_TO_DATASET = {
  content,
  contentDisplay,
  contentTopic,
  pageView,
  questions,
  stockPortfolioItem,
  user,
}

export default handleActions({
  [actions.setDataset]: (state, action) => {
    return NAME_TO_DATASET[action.payload]
  },
}, content)
