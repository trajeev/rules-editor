import React from 'react';
import Add from '../add/add.component'
import Reset from '../reset/reset.component'
import Button from '../button/button.component';
import './search.styles.scss'

const Search = ({onclick}) => (
    <div className = "search"> 
        <Add onclick = {onclick}/>
        <Reset />
        <div className = "search-field">
            <input className = "search-input"></input>
            <Button name = 'Search'/>
        </div>
    </div>
)
 
export default Search;