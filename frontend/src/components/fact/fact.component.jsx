import React, {useState, useEffect} from 'react';
import Button from '../button/button.component';
import AddFact from '../addfact/addfact.component';
import AllFacts from '../allfacts/allfacts.component';
import Search from '../search/search.component'
import {addFact, editFact, removeFact, getFacts} from '../../redux/facts/facts.action'
import {useDispatch, useSelector} from 'react-redux'
import './fact.styles.scss'

const Fact = () => {
    const [fact, setFact] = useState({name: '', type: ''})
    const [showFact, showSetFact] = useState(false)
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch()
    const facts = useSelector((state) => state.facts.facts)

    useEffect(() => {
        dispatch(getFacts())
    }, [dispatch])
    
    const handleFactSubmit = event => {
        event.preventDefault()
        dispatch(addFact(fact))
        setFact({name: '', type: ''})
        showSetFact(false)
    }

    const onEditSubmit = event => {
        event.preventDefault()
        dispatch(editFact(fact))
        setFact({name: '', type: ''})
        showSetFact(false)
        setEdit(false)
    }

    const buttonClick = () => {
        showSetFact(false)
        setEdit(false)
    }

    const handleChange = event => {
        const {value, name} = event.target 
        setFact({...fact, [name] : value})
    }

    const factRemove = fact => {
        dispatch(removeFact(fact))
    }

    const factEdit = fact => {
        setEdit(true)
        const copy = [...facts]
        let editFact = copy.find((f) => fact._id === f._id)
        for (const key in editFact) {
            setFact(fact => ({...fact, [key]: editFact[key]}))
        }
        showSetFact(true)
    }

    const addSubmit = () => {
        setFact({name: '', type: ''})
        showSetFact(true)
    }

    return(
    <div>
        <Search onclick = {addSubmit}/>
        {facts.length === 0 ? 
        (showFact ?
            <AddFact 
                edit = {edit}
                fact = {fact}
                onsubmit = {handleFactSubmit} 
                onchange = {handleChange}
                onedit = {onEditSubmit}
                onclick = {buttonClick}
            />: 
             (<div className = "fact">
                There are no facts to show
                <Button name = 'Create Facts' onClick = {addSubmit}/>
            </div>)): 
            (showFact ? 
                <AddFact 
                    edit = {edit}
                    fact = {fact}
                    onsubmit = {handleFactSubmit} 
                    onchange = {handleChange}
                    onedit = {onEditSubmit}
                    onclick = {buttonClick}
                /> : 
                <AllFacts facts = {facts} remove = {factRemove} edit = {factEdit}/>
            )
        }
    </div>
)}


 
export default Fact;