import {FactsActionTypes} from './facts.types'

export const addFact = facts => ({
    type: FactsActionTypes.ADD_FACT,
    payload: facts
})

export const editFact = facts => ({
    type: FactsActionTypes.EDIT_FACT,
    payload: facts
})

export const removeFact = facts => ({
    type: FactsActionTypes.REMOVE_FACT,
    payload: facts
})