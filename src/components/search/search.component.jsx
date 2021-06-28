import React from 'react';
import Add from '../add/add.component'
import Reset from '../reset/reset.component'
import Button from '../button/button.component';
import './search.styles.scss'

const Search = () => (
    <div className = "search"> 
        <Add />
        <Reset />
        <div className = "search-field">
            <input className = "search-input"></input>
            <Button name = 'Search' className = 'button-search'/>
        </div>
    </div>
)
 
export default Search;