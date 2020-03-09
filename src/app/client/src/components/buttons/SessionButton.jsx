import React from 'react'
import { Nav, Navbar, Button, DropdownButton, Dropdown, Image } from 'react-bootstrap'
import { Redirect, withRouter, NavLink, Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const SessionButton = ({username, history, LoggedOut}) => {
    return (
        <DropdownButton alignRight
          title={username}  
          id="dropdown-menu-align-right">
    
          <Dropdown.Item eventKey="0" onClick={() => history.push('/')} >        
            Home
          </Dropdown.Item>        
          <Dropdown.Item eventKey="1" onClick={() => history.push('/profile')}>
            Profile        
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onSelect={function (){
            
            Swal.fire({
              title: 'Are you sure?',
              text: "You Want logout??",
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, Log out!'
            }).then((result) => {
              if (result.value) {
                LoggedOut()
              }
            })      
          }}> Logout
          </Dropdown.Item>
      </DropdownButton>
    )
}
export default withRouter(SessionButton)