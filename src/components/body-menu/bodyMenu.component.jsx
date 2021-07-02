import React from 'react';
import BodyMenuElement from '../body-menu-element/bodyMenuElement.component';
import './bodyMenu.styles.scss'

const BodyMenu = ({onclick, menu}) => {
    const list = ['Facts', 'Decisions', 'Validate', 'Generate']
    return (
    <div className = "bodymenu">
        {list.map(li => 
            <BodyMenuElement key = {li} list = {li} onclick = {() => onclick(li)} menu = {menu}/>
        )}
    </div>
)}
 
export default BodyMenu;