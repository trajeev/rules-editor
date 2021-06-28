import React from 'react';
import {IoIosAddCircle} from 'react-icons/io'
import './add.style.scss'

const Add = () => (
    <div className = 'add-icon'>
        <span><IoIosAddCircle value = {{size: '25px'}}/></span>
        <span className = "text">Add</span>
    </div>
)
 
export default Add;