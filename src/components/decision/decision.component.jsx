import React from 'react';
import Button from '../button/button.component'
import './decision.styles.scss'
import Search from '../search/search.component';

const Decision = () => (
    <div>
        <Search />    
        <div className = "decision">
            There are no Decisions to show
            <Button name = 'Create Decison'/>
        </div>
    </div>
)
 
export default Decision;