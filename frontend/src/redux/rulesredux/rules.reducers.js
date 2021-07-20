import {RULESACTIONTYPES} from './rules.types'

const INITIAL_STATE = {
    rules: []
}

export const rulesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case RULESACTIONTYPES.ADD_RULE: 
            return {
                ...state,
                rules: [...state.rules, action.payload]
            }
        case RULESACTIONTYPES.SWITCH_RULE:
        default:
        return state
    }
}