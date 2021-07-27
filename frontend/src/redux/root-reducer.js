import {combineReducers} from 'redux'
// import { factsReducer } from './facts/facts.reducer'
import {rulesReducer} from './rulesredux/rules.reducers'


const rootReducer = combineReducers({
    // facts: factsReducer,
    rules: rulesReducer
})

export default rootReducer