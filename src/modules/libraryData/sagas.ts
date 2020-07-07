import { takeEvery, all, put } from 'redux-saga/effects'
import { loadLibraryDataAction, loadLibraryDataSuccessAction, loadLibraryDataErrorAction } from './ducks'
import { getData } from '../../api'
import { Region } from '../../types/region'

function* loadLibraryData() {
  try {
    const data: Region[] = yield getData()

    if (data.length <= 0) {
      yield put(loadLibraryDataErrorAction('Данных нет'))
    }

    const result = new Map()

    data.forEach((item) => {
      result.set(item.order, item)
    })

    yield put(loadLibraryDataSuccessAction(result))
  } catch (e) {
    yield put(loadLibraryDataErrorAction(e))
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(loadLibraryDataAction.getType(), loadLibraryData),
  ])
}
