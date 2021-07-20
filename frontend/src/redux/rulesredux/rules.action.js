import {RULESACTIONTYPES} from './rules.types'

export const addRule = (rule) => ({
    type: RULESACTIONTYPES.ADD_RULE,
    payload: rule
})

export const swtichRule = () => ({
    type: RULESACTIONTYPES.SWITCH_RULE,
    payload: 'dfk'
})