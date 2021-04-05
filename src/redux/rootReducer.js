import {populateReducer, POPULATE_KEY} from './populateRedux/populate.reducer'
import {combineReducers} from 'redux'


let rootReducer = combineReducers({
    [POPULATE_KEY] : populateReducer
})

export {rootReducer}