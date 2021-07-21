import {RULESACTIONTYPES} from './rules.types'

export const addRule = rule => ({
    type: RULESACTIONTYPES.ADD_RULE,
    payload: rule
})

export const swtichRule = index => ({
    type: RULESACTIONTYPES.SWITCH_RULE,
    payload: index
})