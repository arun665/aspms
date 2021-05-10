import react ,{useState} from 'react';

import {addPassCat,updatePassCat} from "../redux/index";
import {connect,useSelector, useStore} from "react-redux";
import Ripples from 'react-ripples';
import BookContainer from './bookContainer.js';
import GetPassCat from './getPassCat.js';
import SignupContainer from './signupContainer.js';
import LoginContainer from './LoginContainer.js';
import Home from './Home.js';
import Header from './Header.js';
const Router = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;

const Link = require("react-router-dom").Link;

import { Container,Row,Col } from 'react-bootstrap';
import { getPassCat } from '../redux/action/bookAction';

import Dashboard from './dashboard.js';
import DashBoardHome from './dashboardHome';
import TempApp from './TempApp';
function mainContainer(props) {
const isUserLoggedIn=useSelector(state=>state.user.isLoggedin);
   if(isUserLoggedIn===false || localStorage.getItem("name")===null){
var CallContainer=
<> 
<DashBoardHome/>
<Route exact path="/" component={Dashboard}/>
<Route exact path="/signin" component={LoginContainer}/>
<Route exact path="/signup" component={SignupContainer}/>

<Route exact path="/weather" component={TempApp}/>


 </>;
   }
   else{
   var name=localStorage.getItem("name");

CallContainer=<>    

<Header/>
<Route exact path="/signin" component={Home}/>
<Route exact path="/signup" component={Home}/>
<Route exact path="/weather" component={TempApp}/>

<Route exact path="/home" component={Home}/>

    <Route exact path="/add" component={BookContainer}/>
    <Route exact path="/getdata" component={GetPassCat}/>


 </>
   }
  return (
    <div className="App">
    
    
    

   {CallContainer}
   </div>
  );
}

const mapStatetoProps=(state)=>{
    return{
       isLoggedin:state.user.isLoggedin,
       msg:state.pass.msg
    }
}


const mapDispatchtoProps=(dispatch)=>{
return{
   
    }
}


export default connect(mapStatetoProps,mapDispatchtoProps)(mainContainer);






