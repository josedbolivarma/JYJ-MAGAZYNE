import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import { shoppingCartReducer } from '../reducers/shoppingCartReducer'
import { productsReducer } from '../reducers/productsReducer'
import { loginReducers } from '../reducers/loginReducers'
import { registerReducers } from '../reducers/registerReducers'

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const reducersEnviar = combineReducers({
  login: loginReducers,
  register: registerReducers,
  products: productsReducer,
  cart: shoppingCartReducer,
})

export const store = createStore(reducersEnviar, composeEnhancers(applyMiddleware(thunk)))
