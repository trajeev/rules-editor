import React from 'react';
import './listsidebar.styles.scss'

const ListSideBar = () => (
    <div className = "list-sidebar">
        <ul>
            <li className = "list-sidebar-element">Ruleset</li>
            <li className = "list-sidebar-element">Create Rules</li>
            <li className = "list-sidebar-element">Upload Rules</li>
        </ul>
    </div>
)
 
export default ListSideBar;