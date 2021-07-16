import {combineReducers} from 'redux'
import { factsReducer } from './facts/facts.reducer'


const rootReducer = combineReducers({
    facts: factsReducer
})

export default rootReducer