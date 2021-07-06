import React, {useState} from 'react';
import Button from '../button/button.component';
import AddFact from '../addfact/addfact.component';
import AllFacts from '../allfacts/allfacts.component';
import Search from '../search/search.component'
import './fact.styles.scss'

const Fact = () => {
    const [facts, setFacts] = useState([])
    const [fact, setFact] = useState({name: '', type: ''})
    const [showFact, showSetFact] = useState(false)
    
    const handleFactSubmit = (event) => {
        event.preventDefault()
        let copy = [...facts]
        copy = [...facts, fact]
        setFacts(copy)
        showSetFact(false)
    }

    const handleChange = event => {
        const {value, name} = event.target 
        setFact({...fact, [name] : value})
    }

    const addClick = () => {
        showSetFact(true)
    }

    const factRemove = (index) => {
        // console.log(index)
        const copy = [...facts]
        copy.splice(index, 1)
        setFacts(copy)
    }

    return(
    <div>
        <Search onclick = {addClick}/>
        {facts.length === 0 ? 
        (showFact ?
            <AddFact 
                values = {fact}
                onsubmit = {handleFactSubmit} 
                onchange = {handleChange}
                onclick = {() => showSetFact(false)}/>: 
             (<div className = "fact">
                There are no facts to show
                <Button name = 'Create Facts' onClick = {() => showSetFact(true)}/>
            </div>)): 
            (showFact ? 
                <AddFact 
                    onsubmit = {handleFactSubmit} 
                    onchange = {handleChange}
                    onclick = {() => showSetFact(false)}
                /> : 
                <AllFacts facts = {facts} remove = {factRemove}/>
            )
        }
    </div>
)}
 
export default Fact;