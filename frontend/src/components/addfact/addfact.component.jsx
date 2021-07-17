import React from 'react';
import Button from '../button/button.component';
import './addfact.styles.scss'

const AddFact = ({onsubmit, onchange, onclick, onedit, fact, edit}) => {
    const submit = edit ? onedit : onsubmit
    const button = edit ? 'Save' : 'Add Fact'
    return(
    <div className = "addfact-panel">
        <form onSubmit = {submit}>
            <div className = "addfact-container">
                <div className = "addfact-form">
                    <div className = "addfact-input">
                        <label>Name</label>
                        <input name = "name" onChange = {onchange} value = {fact ? fact.name : ''}></input>
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
                <div className = "addfact-button">
                    <Button type = 'submit' name = {button}/>
                    <Button type = 'button' name = "Cancel" onClick = {onclick}/>
                </div>
            </div>
        </form>
    </div>
)}
 
export default AddFact;