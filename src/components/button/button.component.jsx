import React from 'react';
import './button.styles.scss'

const Button = ({name, ...otherProps}) => {
    // console.log(otherProps)
    return(
    <button className = "button" {...otherProps}>{name}</button>
)}
 
export default Button;