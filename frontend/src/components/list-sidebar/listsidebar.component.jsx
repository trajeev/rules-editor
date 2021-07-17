import React, {useContext} from 'react';
import {AiOutlinePlusSquare, AiOutlineCloudUpload} from 'react-icons/ai'
import {GiCheckboxTree} from 'react-icons/gi'
import './listsidebar.styles.scss'
import {RulesContext} from '../../App'

const ListSideBar = ({onclick}) => {
    const rules = useContext(RulesContext)
    return(
        <div className = "list-sidebar">
            <ul>
                <li className = "list-sidebar-element">
                    <span><GiCheckboxTree /></span>
                    <span className = "list-sidebar-text">Ruleset</span>
                </li>
                {rules.map((rule, i) =>  (
                    <ul>
                        <li key = {i} className = "list-sidebar-rule">{rule}</li>
                    </ul>)
                )}
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