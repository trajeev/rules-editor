import React from 'react';
import './allfacts.styles.scss'

const AllFacts = ({facts, remove, edit}) => {
    console.log(facts)
    return (
    <div>
        {facts.map((fact, index) => (
            <div className = {`fact-element ${fact.type}`} key = {fact._id}>
                <div className = "fact-element-index">{index + 1}</div>
                <div className = "fact-element-name">{fact.name}</div>
                <div className = "fact-element-type">
                    <span className = {`${fact.type}`}>{fact.type}</span>
                </div>
                <div className = "fact-element-edit" onClick = {() => edit(fact)}>
                    <span>
                        Edit
                    </span>
                </div>
                <div className = "fact-element-remove" onClick = {() => remove(fact)}>
                    <span>
                        Remove
                    </span>    
                </div>
            </div>
        ))}
    </div>
)}
 
export default AllFacts;