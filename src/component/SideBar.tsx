import React from 'react'
import MenuList from '@mui/material/MenuList';
//import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom'
function SideBar(props:any) {
  return (
    
    <MenuList>
     {props.navMenuOption!=="profile" ?<Link to="/dashboard/profile"><MenuItem>Profile</MenuItem></Link> : <MenuItem>Profile</MenuItem>}
     {props.navMenuOption!=="asset" ? <Link to="/dashboard/asset"><MenuItem>Asset</MenuItem></Link>:<MenuItem>Asset</MenuItem>}
     {props.navMenuOption!=="request" ? <Link to="/dashboard/request"><MenuItem>Request</MenuItem></Link>: <MenuItem>Request</MenuItem> }
    </MenuList>
  
  )
}

export default SideBar