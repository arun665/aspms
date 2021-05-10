import react ,{useState} from 'react';
import './sass/signin.scss';

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
import SignupContainer from './signupContainer.js';

import Dashboard from './dashboard';


import { Container,Row,Col , Form ,Button, Alert } from 'react-bootstrap';

function LoginContainer(props) {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [email,setEmail]=useState('');
  const [confirmpassword,setConfirmPassword]=useState('');
  
  if(props.msg!=''){
    var msg=<Alert variant='danger'> <h3>{props.msg}</h3> </Alert>
}
  return (

    <div id="signin">
  
    <Container >
    <Row>
    <Col>
    <h1>LOGIN-FORM</h1> 



<Form id="form" style={{'width':'80%','marginLeft':'auto','marginRight':'auto'}} >
{msg}
<Form.Group>
<Form.Label>Username </Form.Label>
<Form.Control type="text" defaultValue={props.username}  onChange={e=>setUsername(e.target.value)}/>

</Form.Group>

<Form.Group >
<Form.Label>Password</Form.Label>
<Form.Control type="password" defaultValue={props.password}  onChange={e=>setPassword(e.target.value)}/>
</Form.Group>

<p>Doesn't have an account?<Link to="/signup"> Create new Account</Link></p>
<Button variant="primary"  onClick={()=>props.loginUser(username,password)}>
Sign-In
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
      password:state.user.password,
     
      msg:state.user.msg
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

export default connect(mapStatetoProps,mapDispatchtoProps)(LoginContainer);








