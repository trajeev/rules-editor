import {RULESACTIONTYPES} from './rules.types'

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
        default:
        return state
    }
}