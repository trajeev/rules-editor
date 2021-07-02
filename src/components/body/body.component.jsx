import React, {useState} from 'react';
import BodyMenu from '../body-menu/bodyMenu.component';
import Search from '../search/search.component';
import Panel from '../panel/panel.component';
import './body.styles.scss'

const Body = () => {
    const [menu, setMenu] = useState('Facts')

    const toggleBodyMenu = (li) => {
        setMenu(li)
    }


    return(
    <div className = "body"> 
        <BodyMenu onclick = {toggleBodyMenu} menu = {menu}/>
        <Search />
        <Panel menu = {menu}/>
    </div>
)}
 
export default Body;