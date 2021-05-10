import react ,{useState} from 'react';

import {addPassCat,updatePassCat,signupUser, loginUser} from "../redux/action/userAction";
import {connect} from "react-redux";
import Ripples from 'react-ripples';
import BookContainer from './bookContainer.js';
import GetPassCat from './getPassCat.js';
import Header from './Header.js';
import {signupuser} from "../redux/action/bookAction.js";
const Router = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Link = require("react-router-dom").Link;
import Dashboard from './dashboard';
import SignupContainer from './signupContainer.js';
import LoginContainer from './LoginContainer.js';
import './sass/signin.scss';




import { Container,Row,Col , Form ,Button,Alert} from 'react-bootstrap';

function signupContainer(props) {
  const [Username,setUsername]=useState('');
  const [Password,setPassword]=useState('');
  const [Email,setEmail]=useState('');
  const [Confirmpassword,setConfirmPassword]=useState('');
  
  if(props.signupmsg!=''){
              var msg=<Alert variant='danger'> <h3>{props.signupmsg}</h3> </Alert>
  }
  return (
    <div id="signin">
    
    <Container>
    <Row>
  
    <Col>
<h1>SIGN-UP FORM</h1> 

     

    <Form style={{'width':'80%','marginLeft':'auto','marginRight':'auto'}}>
    {msg}
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username {Username} </Form.Label>
    <Form.Control type="text" defaultValue={props.username}  onChange={e=>setUsername(e.target.value)}/>
    

  </Form.Group>

  <Form.Group >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" defaultValue={props.email}  onChange={e=>setEmail(e.target.value)}/>
  </Form.Group>

  <Form.Group >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" defaultValue={props.password}  onChange={e=>setPassword(e.target.value)}/>
   </Form.Group>

  <Form.Group >
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" defaultValue={props.confirmpassword}  onChange={e=>setConfirmPassword(e.target.value)}/>
   
  </Form.Group>

<p> Already having account? <Link to="/signin">Signin</Link></p>
  <Button variant="primary"  onClick={()=>props.signupUser(Username,Email,Password,Confirmpassword)}>
    SignUp
  </Button>
</Form>
        </Col>
  </Row>  
</Container> 
    </div>

  );
}



const mapStatetoProps=(state)=>{
  
  localStorage.setItem("name",state.user.username);
  return{
      username:state.user.username,
      email:state.user.email,
      password:state.user.password,
      confirmpassword:state.user.confirmpassword,
      signupmsg:state.user.signupmsg
  }
}


const mapDispatchtoProps=(dispatch)=>{
return{
  signupUser:function(username,email,password,confirmpassword){
   dispatch(signupUser(username,email,password,confirmpassword));
  }
  ,
  loginUser:function(username,password){
    dispatch(loginUser(username,password));
  }

}
}

export default connect(mapStatetoProps,mapDispatchtoProps)(signupContainer);








