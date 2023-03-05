import {legacy_createStore} from 'redux'
import { reducer as AuthReducer } from './Auth/reducer'
import { reducer as AppReducer } from './App/reducer'
import { applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
const rootReducer=combineReducers({AppReducer,AuthReducer})



const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

export {store}