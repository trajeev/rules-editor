import React from 'react';
import './button.styles.scss'

const Button = (props) => (
    <button className = "button">{props.name}</button>
)
 
export default Button;