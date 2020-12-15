import {combineReducers} from 'redux';

import {bodysReducer} from './bodysReducer'
import {dogsReducer} from './dogsReducer'

export const rootReducer = combineReducers({
    bodys: bodysReducer,
    dogs: dogsReducer

})