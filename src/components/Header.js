import { useReducer , useEffect } from 'react';

import {addPassCat,updatePassCat,signupUser, loginUser } from "../redux/action/userAction";
import {useSelector,useDispatch} from "react-redux";
import {fetchPassCat} from "../redux";
import React from 'react';   
import ReactDOM from 'react-dom';   
import{Navbar , Nav, NavDropdown} from 'react-bootstrap';
import {connect, useStore} from "react-redux";
import {logout} from "../redux/action/userAction.js";
import {Link} from 'react-router-dom';
import './sass/header.scss';
import Typed from 'react-typed';

  


function Header(props){

    return(
        <div id="header">
<Navbar bg="primary" expand="lg" id="navbar">
  <Navbar.Brand href="#home" id="brand">Password management system</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link ><Link to="/home" id="brand">Home</Link></Nav.Link>
 
      <Nav.Link ><Link to="/weather" id="brand">Weather-App </Link><span class="badge badge-danger">New</span></Nav.Link>
 
 
      
      <NavDropdown title="Passsword" id="basic-nav-dropdown" id="brand2">
        <NavDropdown.Item id="brandsub" > <Link to="/add" id="link">add-Password</Link></NavDropdown.Item>
        <NavDropdown.Item id="brandsub"><Link to="/getdata" id="link">get-Password</Link></NavDropdown.Item>
      </NavDropdown>
 
      <NavDropdown title={props.username} id="basic-nav-dropdown" id="brand2">

      <NavDropdown.Item href="#"  id="brandsub"><Link to="/" id="link"  onClick={()=>props.logoutUser()}>Logout</Link>  </NavDropdown.Item>
 
      </NavDropdown>

  </Nav> 
  </Navbar.Collapse>
</Navbar>

        </div>
    );
}


const mapStatetoProps=(state)=>{

  return{
      username:state.user.username,
  
  }
}


const mapDispatchtoProps=(dispatch)=>{
return{
  logoutUser:function(){
    dispatch(logout());
},

}
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Header);








