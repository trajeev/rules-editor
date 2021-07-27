import React, {useEffect, useRef} from 'react';
import Button from '../button/button.component';
import './addfact.styles.scss'

const AddFact = ({onsubmit, onchange, onclick, onedit, fact, edit, objectList, handleObjectAdd, handleObjectRemove}) => {
    const submit = edit ? onedit : onsubmit
    const button = edit ? 'Save' : 'Add Fact'
    const inputRef = useRef()
    const objectRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    },[])
    useEffect(() => {
        if (fact.type === 'object'){
            objectRef.current.focus()
        }
    },[fact.type])

    return(
    <div className = "addfact-panel">
        <form onSubmit = {submit}>
            <div className = "addfact-container">
                <div className = "addfact-form">
                    <div className = "addfact-input">
                        <label>Name</label>
                        <input name = "name" onChange = {onchange} value = {fact ? fact.name : ''} ref = {inputRef}></input>
                    </div>
                    <div className = "addfact-input">
                        <label>Type</label>
                        <select name = "type" onChange = {onchange} value = {fact ? fact.type : ''}>
                            <option>Please Select...</option>
                            <option>string</option>
                            <option>number</option>
                            <option>array</option>
                            <option>object</option>
                        </select>
                    </div>
                </div>
                {fact.type === 'object' ? 
                    objectList.map((list, index) => {
                        return (
                        <div className = 'addfact-object'>
                            <input name = 'key' placeholder = 'key' ref = {objectRef}></input>
                            <select name = 'value'>
                                <option>Please Select...</option>
                                <option>string</option>
                                <option>number</option>
                                <option>boolean</option>
                            </select>
                            {objectList.length !== 1 && 
                            <Button name = 'Remove' className = 'remove' onClick = {() => handleObjectRemove(index)}/>}
                            {objectList.length - 1 === index && 
                            <Button onClick = {handleObjectAdd} name = 'Add' className = 'add'/>}
                        </div>
                        )
                    })
                    : <div className = 'addfact-object'></div>}
                <div className = "addfact-button">
                    <Button type = 'submit' name = {button}/>
                    <Button type = 'button' name = "Cancel" onClick = {onclick}/>
                </div>
            </div>
        </form>
    </div>
)}
 
export default AddFact;