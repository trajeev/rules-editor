import React from 'react';  
import './ruleslist.styles.scss'
import { useSelector } from 'react-redux';

const RulesList = () => {
    const rules = useSelector(state => state.rules.rules)
    return(
    <div>
        {rules.map((rule, i) =>  (
            <ul>
                <li key = {i} className = "list-sidebar-rule">{rule}</li>
            </ul>)
        )}
    </div>
)}
 
export default RulesList;