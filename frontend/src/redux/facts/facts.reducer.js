import {FactsActionTypes} from './facts.types'

const INITIAL_STATE = {
    facts: []
}

export const factsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FactsActionTypes.ADD_FACT:
            return {
                ...state,
                facts: action.payload
            }
        case FactsActionTypes.EDIT_FACT:
            return {
                ...state, 
                facts: action.payload
            }
        case FactsActionTypes.REMOVE_FACT:
            return {
                ...state,
                facts: action.payload
            }
        default: 
            return state
    }
}