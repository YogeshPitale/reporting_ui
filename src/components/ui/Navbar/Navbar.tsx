import { AppBar,Toolbar} from '@mui/material'
import React from 'react'
import logo from "../../../assets/wf_logo.webp"
const Navbar = () => {
  return (
   
        <AppBar sx={{borderBottom:"4px solid #ffcd41"}} position='fixed'>
            <Toolbar>
                <img src={logo} alt="logo"/>
            </Toolbar>
        </AppBar>
    
  )
}

export default Navbar