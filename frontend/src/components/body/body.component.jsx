import React, {useState} from 'react';
import BodyMenu from '../body-menu/bodyMenu.component';
import Panel from '../panel/panel.component';
import { useSelector } from 'react-redux';
import './body.styles.scss'

const Body = () => {
    const [menu, setMenu] = useState('Facts')
    const rules = useSelector(state => state.rules.rules)
    const index = useSelector(state => state.rules.currentRule)
    console.log(index);

    const toggleBodyMenu = (li) => {
        setMenu(li)
    }

    return(
    <div className = "body"> 
        <div className = "body-index">{rules[index].name}</div>
        <BodyMenu onclick = {toggleBodyMenu} menu = {menu}/>
        <Panel menu = {menu}/>
    </div>
)}
 
export default Body;