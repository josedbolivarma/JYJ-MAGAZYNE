import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";
import { registerReducer } from "../reducers/registerReducer";
import { shoppingCartReducer } from "../reducers/shoppingCartReducer";
import { productsReducer } from "../reducers/productsReducer";
import { modalReducer } from "../reducers/modalReducer";
import { guardarLocalStorage, obtenerLocalStorage } from "../../utils/LocalStorage";

import { shoppingCartReducer } from '../reducers/shoppingCartReducer'
import { productsReducer } from '../reducers/productsReducer'
import { loginReducers } from '../reducers/loginReducers'
import { registerReducers } from '../reducers/registerReducers'

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const storageState = obtenerLocalStorage();

const reducersEnviar = combineReducers({
    login: loginReducer,
    register: registerReducer,
    products: productsReducer,
    cart: shoppingCartReducer,
    modal: modalReducer,
})

export const store = createStore(
    reducersEnviar,
    storageState,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.subscribe(() => {
    guardarLocalStorage(
        {
           modal: store.getState().modal
        },
   )
})
