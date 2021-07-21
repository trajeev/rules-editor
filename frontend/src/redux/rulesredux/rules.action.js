import {RULESACTIONTYPES} from './rules.types'

export const addRule = rule => ({
    type: RULESACTIONTYPES.ADD_RULE,
    payload: rule
})

export const swtichRule = index => {
    console.log(index)
    return({
    type: RULESACTIONTYPES.SWITCH_RULE,
    payload: index
})}