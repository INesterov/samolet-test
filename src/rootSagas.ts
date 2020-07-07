import { all } from 'redux-saga/effects'
import libraryDataSaga from './modules/libraryData/sagas'

export default function* rootSaga(): any {
  yield all([
    libraryDataSaga(),
  ])
}
