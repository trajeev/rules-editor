import React, {useState} from 'react';
import Button from '../button/button.component';
import AddFact from '../addfact/addfact.component';
import AllFacts from '../allfacts/allfacts.component';
import Search from '../search/search.component'
import {addFact, editFact, removeFact} from '../../redux/facts/facts.action'
import {useDispatch, useSelector} from 'react-redux'
import produce from 'immer';
import './fact.styles.scss'

const Fact = () => {
    const [fact, setFact] = useState({name: '', type: ''})
    const [objectList, setObjectList] = useState([{key: '', value: ''}])
    const [showFact, showSetFact] = useState(false)
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch()
    const rules = useSelector(state => state.rules.rules)
    const index = useSelector(state => state.rules.currentRule)
    const facts = rules[index].facts
    
    const handleFactSubmit = event => {
        event.preventDefault()
        if (fact.type === 'object') {
            const copy = {...fact, objectList}
            console.log(copy)
        }
        dispatch(addFact(fact))
        setFact({name: '', type: ''})
        setObjectList([{key: '', value: ''}])
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

    const handleObjectAdd = () => {
        setObjectList([...objectList, {key: '', value: ''}])
    }

    const handleObjectRemove = index => {
        const copy = [...objectList]
        copy.splice(index,1)
        setObjectList(copy)
    }
    const handleObjectChange = (index, event) => {
        const {name, value} = event.target  
        setObjectList(
            produce(draft => {
                draft[index][name] = value
            })
        )
    }

    return(
    <div>
        <Search onclick = {addSubmit}/>
        {facts.length === 0 ? 
        (showFact ?
            <AddFact 
                edit = {edit}
                fact = {fact}
                objectList = {objectList}
                onsubmit = {handleFactSubmit} 
                onchange = {handleChange}
                onedit = {onEditSubmit}
                onclick = {buttonClick}
                handleObjectAdd = {handleObjectAdd}
                handleObjectRemove = {handleObjectRemove}
                handleObjectChange = {handleObjectChange}
            />: 
             (<div className = "fact">
                There are no facts to show
                <Button name = 'Create Facts' onClick = {addSubmit}/>
            </div>)): 
            (showFact ? 
                <AddFact 
                    edit = {edit}
                    fact = {fact}
                    objectList = {objectList}
                    onsubmit = {handleFactSubmit} 
                    onchange = {handleChange}
                    onedit = {onEditSubmit}
                    onclick = {buttonClick}
                    handleObjectAdd = {handleObjectAdd}
                    handleObjectRemove = {handleObjectRemove}
                    handleObjectChange = {handleObjectChange}
                /> : 
                <AllFacts facts = {facts} remove = {factRemove} edit = {factEdit} />
            )
        }
    </div>
)}


 
export default Fact;