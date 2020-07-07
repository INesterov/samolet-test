import { combineReducers } from 'redux'
import libraryDataReducer from './modules/libraryData/ducks'

const rootReducer = combineReducers({
  libraryData: libraryDataReducer,
})

export default rootReducer
