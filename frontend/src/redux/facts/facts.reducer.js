import {FactsActionTypes} from './facts.types'
import {factEditFunction} from './facts.utils'

const INITIAL_STATE = {
    facts: []
}

export const factsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FactsActionTypes.ADD_FACT:
            return {
                ...state,
                facts: state.facts.concat(action.payload)
            }
        case FactsActionTypes.EDIT_FACT:
            return {
                ...state, 
                facts: factEditFunction(action.payload, state.facts)
            }
        case FactsActionTypes.REMOVE_FACT:
            return {
                ...state,
                facts: state.facts.filter(fact => fact._id !== action.payload._id)
            }
        case FactsActionTypes.FETCH_FACTS: 
            return {
                ...state,
                facts: action.payload
            }
        default: 
            return state
    }
}