import {RULESACTIONTYPES} from './rules.types'
import {FactsActionTypes} from '../facts/facts.types'
import produce from 'immer'

export const INITIAL_STATE = {
    rules: [],
    currentRule: 0
}

export const rulesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case RULESACTIONTYPES.ADD_RULE: 
            const newRule = {name: action.payload, facts: [], decisions: [], validate: '', generate: ''}
            return {
                ...state,
                rules: [...state.rules, newRule]
            }
        case RULESACTIONTYPES.SWITCH_RULE:
            return {
                ...state, 
                currentRule: action.payload
            }
        case FactsActionTypes.ADD_FACT: 
            return produce(state, draft => {
                draft.rules[draft.currentRule].facts.push(action.payload)
            })
        // case FactsActionTypes.REMOVE_FACT: 
        //     return produce (state, draft => {
        //         draft.rules[draft.currentRule].facts
        //     })
        default:
        return state
    }
}

