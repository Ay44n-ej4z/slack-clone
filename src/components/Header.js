import React, { useState } from 'react'
import './Header.css'
// import MenuIcon from '@material-ui/icons/Menu';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';

import HelpIcon from '@material-ui/icons/Help';
import { useStateValue } from './StateProvider';

function Header() {
    const [{user}] = useStateValue();
    return (
        <div className = "header">
            <div className = 'header_left'>
            <Avatar
            className = "header_avatar" 
            alt = {user?.displayName}
            src = {user?.photoURL}
            />
            <AccessTimeIcon />
            </div>
        
        <div className = "header_search">
            <SearchIcon />
            <input placeholder = "Search for more" />
        </div>
        <div className = "header_right"></div>
        <HelpIcon />
        </div>

    )
}

export default Header
