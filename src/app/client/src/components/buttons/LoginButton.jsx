import React from 'react'
import { Nav, Navbar, Button, DropdownButton, Dropdown, Image } from 'react-bootstrap'
import { Redirect, withRouter, NavLink, Link } from 'react-router-dom'

const LoginButton = ({history}) => {
    return (
        <Button onClick={(e) =>           
            history.push("/login")        
          }>
            login
        </Button>
    )
}

export default withRouter(LoginButton)