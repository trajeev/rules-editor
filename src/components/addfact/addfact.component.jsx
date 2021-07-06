import React from 'react';
import Button from '../button/button.component';
import './addfact.styles.scss'

const AddFact = ({onsubmit, onchange, onclick, values}) => {
    console.log(values)
    return(
    <div className = "addfact-panel">
        <form onSubmit = {onsubmit}>
            <div className = "addfact-container">
                <div className = "addfact-form">
                    <div className = "addfact-input">
                        <label>Name</label>
                        <input name = "name" onChange = {onchange}></input>
                    </div>
                    <div className = "addfact-input">
                        <label>Type</label>
                        <select name = "type" onChange = {onchange}>
                            <option>Please Select...</option>
                            <option>string</option>
                            <option>number</option>
                            <option>array</option>
                            <option>object</option>
                        </select>
                    </div>
                </div>
                <div className = "addfact-button">
                    <Button type = 'submit' name = "Add Facts"/>
                    <Button type = 'button' name = "Cancel" onClick = {onclick}/>
                </div>
            </div>
        </form>
    </div>
)}
 
export default AddFact;