import { takeEvery, all } from 'redux-saga/effects'
import { loadLibraryDataAction } from './ducks'

function* loadLibraryData() {

}

export default function* rootSaga() {
  yield all([
    takeEvery(loadLibraryDataAction.getType(), loadLibraryData),
  ])
}
