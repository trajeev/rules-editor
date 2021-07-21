import React from 'react';  
import './ruleslist.styles.scss'
import { useSelector, useDispatch } from 'react-redux';
import { swtichRule } from '../../redux/rulesredux/rules.action';

const RulesList = () => {
    const rules = useSelector(state => state.rules.rules)
    const dispatch = useDispatch()

    const ruleswitch = (index) => {
        console.log(index)
        dispatch(swtichRule(index))
    }

    return(
    <div>
        {rules.map((rule, i) =>  (
            <ul>
                <li key = {i} className = "list-sidebar-rule" onClick = {() => (ruleswitch(i))}>{rule}</li>
            </ul>)
        )}
    </div>
)}
 
export default RulesList;