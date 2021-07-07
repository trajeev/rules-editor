import React, {useState, useRef} from 'react';
import Button from '../button/button.component';
import AddFact from '../addfact/addfact.component';
import AllFacts from '../allfacts/allfacts.component';
import Search from '../search/search.component'
import './fact.styles.scss'

const Fact = () => {
    const [facts, setFacts] = useState([])
    const [fact, setFact] = useState({name: '', type: ''})
    const [showFact, showSetFact] = useState(false)
    const [edit, setEdit] = useState(false)
    const factIndex = useRef()
    
    const handleFactSubmit = (event) => {
        event.preventDefault()
        let copy = [...facts]
        copy = [...facts, fact]
        setFacts(copy)
        setFact({name: '', type: ''})
        showSetFact(false)
    }

    const onEditSubmit = event => {
        event.preventDefault()
        const copy = [...facts]
        let editfact = copy.find((f, i) => i === factIndex.current)
        for (const key in editfact) {
            editfact[key] = fact[key]
        }
        setFacts(copy)
        setFact({name: '', type: ''})
        showSetFact(false)
        setEdit(false)
        factIndex.current = null
    }

    const buttonClick = () => {
        showSetFact(false)
        setEdit(false)
    }

    const handleChange = event => {
        const {value, name} = event.target 
        setFact({...fact, [name] : value})
    }

    const factRemove = (index) => {
        const copy = [...facts]
        copy.splice(index, 1)
        setFacts(copy)
    }

    const factEdit = (index) => {
        setEdit(true)
        factIndex.current = index
        const copy = [...facts]
        let editFact = copy.find((f, i) => index === i)
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