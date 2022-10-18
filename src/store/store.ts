import {compose, legacy_createStore } from 'redux';

import rootReducer from '.'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
    rootReducer,
    composeEnhancers()
)

export default store

export type RootState =  ReturnType<typeof rootReducer>;
