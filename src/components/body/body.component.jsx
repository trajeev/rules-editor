import React from 'react';
import BodyMenu from '../body-menu/bodyMenu.component';
import Search from '../search/search.component';
import Panel from '../panel/panel.component';
import './body.styles.scss'

const Body = () => (
    <div className = "body"> 
        <BodyMenu />
        <Search />
        <Panel />
    </div>
)
 
export default Body;