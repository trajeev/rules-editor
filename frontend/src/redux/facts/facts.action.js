import {FactsActionTypes} from './facts.types'
import * as api from '../../api/facts'

export const addFact = fact => async (dispatch) => {
    try {
        // console.log(fact)
        const {data} = await api.postFact(fact)
        dispatch({type: FactsActionTypes.ADD_FACT, payload: data})
        
    } catch (error) {
        console.log(error.message)
    }
}

export const editFact = fact => async (dispatch) => {
    try {
        console.log(fact)
        const {data} = await api.updateFact(fact)
        dispatch({type: FactsActionTypes.EDIT_FACT,payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const removeFact = fact => async (dispatch) => {
    try {
        await api.deleteFact(fact)
        dispatch({type: FactsActionTypes.REMOVE_FACT,payload: fact})
    } catch (error) {
        console.log(error.message)   
    }
}

export const getFacts = () => async dispatch => {
    try {
        const {data} = await api.fetchFacts()
        dispatch({type: FactsActionTypes.FETCH_FACTS, payload: data})    
    } catch (error) {
        console.log(error)
    }
}