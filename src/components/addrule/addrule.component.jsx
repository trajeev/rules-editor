import React from 'react';
import Button from '../button/button.component';
import './addrule.styles.scss'

const AddRule = ({onsubmit, onchange}) => (
    <div className = "addrule">
        <h2>Add Rules</h2>
        <form onSubmit = {onsubmit}>
            <div className = "addrule-label">
                <label>Name</label>
            </div>
            <div className = "addrule-form">
                <input onChange = {onchange}></input>
                <Button name = "Create"/>  
            </div>
        </form>
    </div>
)
 
export default AddRule;