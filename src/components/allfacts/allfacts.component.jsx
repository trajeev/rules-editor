import React from 'react';
import './allfacts.styles.scss'

const AllFacts = ({facts}) => {
    console.log(facts)
    return (
    <div>
        {facts.map((fact, index) => (
            <div className = "fact-element" key = {index}>
                <div className = "fact-element-index">{index + 1}</div>
                <div className = "fact-element-name">{fact.name}</div>
                <div className = "fact-element-type">{fact.type}</div>
                <div className = "fact-element-edit">Edit</div>
                <div className = "fact-element-remove">Remove</div>
            </div>
        ))}
    </div>
)}
 
export default AllFacts;