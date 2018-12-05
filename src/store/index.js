import { createStore } from 'redux'
import reducer from '../reducer'

import { createLogger } from 'redux-logger'

import { applyMiddleware } from 'redux'

const loggerMiddleware = createLogger()

const store = createStore(reducer, applyMiddleware(loggerMiddleware))

//dev only!!!!
window.store = store

export default store
