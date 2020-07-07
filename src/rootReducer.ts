import { combineReducers } from 'redux'
import libraryDataReducer from './modules/libraryData/ducks'

const rootReducer = combineReducers({
  libraryData: libraryDataReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
