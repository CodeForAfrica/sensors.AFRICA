import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton, Icon } from '@material-ui/core';


class HamburgerMenu extends Component {
    render() { 
        return ( 
            <div>
                <IconButton style={{color:'white'}}/>
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
            </div>
         );
    }
}
 
export default HamburgerMenu;