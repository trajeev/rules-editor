import React from 'react';
import Button from '../button/button.component';
import './panel.styles.scss'

const Panel = () => {
    // const [facts, setFacts] = useState([])
    return (
        <div className = "panel">
            There are no facts to show
            <Button name = 'Create Facts'/>
        </div>
    )
}

 
export default Panel;