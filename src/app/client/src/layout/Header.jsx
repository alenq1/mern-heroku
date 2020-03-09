import React from 'react'
import { Nav, Navbar, Button, DropdownButton, Dropdown, Image } from 'react-bootstrap'
import { Redirect, withRouter, NavLink, Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {sources} from '../settings/config';
import {LoggedOut} from '../actions/userAuth';
import SessionButton from '../components/buttons/SessionButton';
import LoginButton from '../components/buttons/LoginButton';



const style ={

  position: 'sticky',
  backgroundColor: 'black'

}

const Header = ({username, LoggedOut}) => {
  
  
  return (
    
    <Navbar sticky='top' style={style} variant="dark">
      <NavLink to="/">
        <Navbar.Brand className="ml-2">
          <Image
            src={sources.logo}
            width="115"
            height="45"        
            alt="MERN Boilerplate"
            rounded
            className="mr-3"
          />
            Boilerplate
        </Navbar.Brand>
      </NavLink>
      <Nav className="ml-2 mr-auto">      
      </Nav>
    
      <Nav>
      {
      username !== 'anonymous' ? 
      
        <SessionButton 
          username={username}
          LoggedOut={LoggedOut}
        />
        : 
        <LoginButton/>
      }
    </Nav>    
  </Navbar>
  )
}

const mapStateToProps = (state) => ({
  username: state.user.username
})

const mapDispatchToProps = dispatch => ({
  LoggedOut: () => dispatch(LoggedOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))
