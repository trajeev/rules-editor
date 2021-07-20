import React from 'react';
import {AiOutlinePlusSquare, AiOutlineCloudUpload} from 'react-icons/ai'
import {GiCheckboxTree} from 'react-icons/gi'
import RulesList from '../ruleslist/ruleslist.component';
import './listsidebar.styles.scss'

const ListSideBar = ({onclick}) => {
    return(
        <div className = "list-sidebar">
            <ul>
                <li className = "list-sidebar-element">
                    <span><GiCheckboxTree /></span>
                    <span className = "list-sidebar-text">Ruleset</span>
                </li>
                <RulesList />
                <li className = "list-sidebar-element">
                    <span><AiOutlinePlusSquare /></span>
                    <span className = "list-sidebar-text" onClick = {onclick}>Create Rules</span>
                </li>
                <li className = "list-sidebar-element">
                    <span><AiOutlineCloudUpload /></span>
                    <span className = "list-sidebar-text">Upload Rules</span>
                </li>
            </ul>
        </div>
)}
 
export default ListSideBar;