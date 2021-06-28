import React, {useState} from 'react';
import './sidebar.styles.scss'
import {GrMenu} from 'react-icons/gr'
import ListSideBar from '../list-sidebar/listsidebar.component';
import { IconContext } from 'react-icons';

const SideBar = () => {
    const [close, setToggle] = useState(true)

    const toggleMenu = () => {
        setToggle(!close)
    }
    return (
        <IconContext.Provider value = {{className: "menu-icon"}}>
        <div className = "menu">
           {close ? 
            <div className = "menu-closed">
                <GrMenu onClick = {toggleMenu}/> 
            </div>:
            <div className = "sidebar">
                <GrMenu color = "white" onClick = {toggleMenu}/>
                <ListSideBar />
            </div>
            }
        </div>
        </IconContext.Provider>
    )
}
 
export default SideBar;