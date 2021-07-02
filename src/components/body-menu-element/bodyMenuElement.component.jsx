import React from 'react';
import './bodyMenuElement.styles.scss'

const BodyMenuElement = ({list, onclick, menu}) => {
    return (
    <div className = { menu === list ? `bodymenu-element ${menu}`: `bodymenu-element`} onClick = {() => onclick(list)}>
        {list}
    </div>
)}
 
export default BodyMenuElement;