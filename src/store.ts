import { applyMiddleware, createStore, compose } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import rootSagas from './rootSagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
  logger,
  sagaMiddleware,
]

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
)

const store = createStore(
  rootReducer,
  enhancer,
)

sagaMiddleware.run(rootSagas)

export default store
