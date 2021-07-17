import React from 'react';
import {GiCancel} from 'react-icons/gi'
import './reset.styles.scss'

const Reset = () => (
    <div className = "reset">
        <span><GiCancel /></span>
        <span className = "text"> Reset</span>
    </div>
)
 
export default Reset;