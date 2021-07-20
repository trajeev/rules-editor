import React, {useState} from 'react';
import BodyMenu from '../body-menu/bodyMenu.component';
import Panel from '../panel/panel.component';
import { useSelector } from 'react-redux';
import './body.styles.scss'

const Body = () => {
    const [menu, setMenu] = useState('Facts')
    const rules = useSelector(state => state.rules.rules)

    const toggleBodyMenu = (li) => {
        setMenu(li)
    }

    return(
    <div className = "body"> 
        {rules[0]}
        <BodyMenu onclick = {toggleBodyMenu} menu = {menu}/>
        <Panel menu = {menu}/>
    </div>
)}
 
export default Body;