import { handleActions as raHandleActions } from 'redux-actions'
import { produce } from 'immer'

// https://github.com/redux-utilities/redux-actions/issues/329#issuecomment-431629356
export const handleActions = (actions, state) => raHandleActions(
  Object.keys(actions).reduce((acc, key) => {
    acc[key] = produce(actions[key])

    return acc
  }, {}),
  state
)
