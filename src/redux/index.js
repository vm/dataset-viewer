import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { catchError } from 'rxjs/operators'

import { epic as datasetEpic, reducer as datasetReducer } from './dataset'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  dataset: datasetReducer,
})

const epics = [
  datasetEpic,
]

const rootEpic = (action$, store$, dependencies) => {
  return combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error)
      return source
    })
  )
}

const epicMiddleware = createEpicMiddleware()

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(epicMiddleware)
    )
  )

  window.store = store

  epicMiddleware.run(rootEpic)

  return store
}
