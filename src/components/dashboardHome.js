import { useReducer , useEffect } from 'react';

import {addPassCat,updatePassCat,signupUser, loginUser } from "../redux/action/userAction";
import {useSelector,useDispatch} from "react-redux";
import {fetchPassCat} from "../redux";
import React from 'react';   
import ReactDOM from 'react-dom';   
import{Navbar , Nav, NavDropdown,Button,ButtonGroup} from 'react-bootstrap';
import {connect, useStore} from "react-redux";
import {logout} from "../redux/action/userAction.js";
import {Link} from 'react-router-dom';

import './sass/dashboardhome.scss';
  



function DashBoardHome(props){

    return(
        <div id="dashboardhome">
<Navbar bg="primary" expand="lg">
  <Navbar.Brand href="#home" id="brand">Password management system</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" id="dashboardmenu">
      
 
      <Nav.Link ><Link to="/" id="brand">Home</Link></Nav.Link>
 
  </Nav> 
  
  <Nav.Link ><Link to="/signin" id="brand"><Button type="button" className="btn btn-success">SignIn</Button></Link></Nav.Link>
      
  <Nav.Link ><Link to="/signup" id="brand"><Button type="button" className="btn btn-danger">SignUp</Button></Link></Nav.Link>
      
  </Navbar.Collapse>
</Navbar>

        </div>
    );
}


const mapStatetoProps=(state)=>{

  return{
   
  }
}


const mapDispatchtoProps=(dispatch)=>{
return{
  logoutUser:function(){
    dispatch(logout());
},

}
}

export default connect(mapStatetoProps,mapDispatchtoProps)(DashBoardHome);








