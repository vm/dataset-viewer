import { ofType, combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import {
  switchMap,
  startWith,
  pluck,
  map,
  catchError,
} from 'rxjs/operators'

import * as api from './api'
import * as actions from './actions'

const fetchDatasetListEpic = action$ => action$.pipe(
  ofType(actions.fetchDatasetList.toString()),
  switchMap(() => {
    return from(api.fetchDatasetList()).pipe(
      pluck('data'),
      map(actions.fetchDatasetListSuccess),
      startWith(actions.fetchDatasetListPending()),
      catchError(() => of(actions.fetchDatasetListFailed())),
    )
  }),
)

const fetchDatasetEpic = action$ => action$.pipe(
  ofType(actions.fetchDataset.toString()),
  pluck('payload'),
  switchMap(id => {
    return from(api.fetchDataset(id)).pipe(
      pluck('data'),
      map(actions.fetchDatasetSuccess),
      startWith(actions.fetchDatasetPending()),
      catchError(() => of(actions.fetchDatasetFailed())),
    )
  }),
)

export default combineEpics(
  fetchDatasetListEpic,
  fetchDatasetEpic,
)
