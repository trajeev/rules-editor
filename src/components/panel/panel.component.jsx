import React from 'react';
import Fact from '../fact/fact.component'
import Decision from '../decision/decision.component';
import Generate from '../generate/generate.component';
import Validate from '../validate/validate.component';
import './panel.styles.scss'

const Panel = ({menu}) => { 
    let renderComponent 
    
    switch (menu) {
        case 'Facts':
            renderComponent = <Fact />
            break
        case 'Decisions':
            renderComponent = <Decision  />
            break
        case 'Validate':
            renderComponent = <Validate />
            break
        case 'Generate':
            renderComponent = <Generate />
            break
        default:
            renderComponent = <Fact />
    }

    return (
        <div>
            {renderComponent}
        </div>
)}

 
export default Panel;