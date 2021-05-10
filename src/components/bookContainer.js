import react ,{useState} from 'react';

import {addPassCat,updatePassCat} from "../redux/index";
import {connect} from "react-redux";
import Ripples from 'react-ripples';
import './sass/addpassword.scss';

import { Container,Row,Col , Form ,Button, Alert} from 'react-bootstrap';

function BookContainer(props) {
    const [category,setCategory]=useState('');

    const [newpassword,setPassword]=useState('');
    if(props.msg!=''){
      var msg=<Alert variant='success'> <h3>{props.msg}</h3> </Alert>
      
  }
      var ActionButton =   <button type="button" onClick={()=>props.addPassCat(category,props.user_id,newpassword)} className="btn btn-outline-primary"> Add  </button>
   
  return (
    <div id="addpassword">
    <h1> Add Password 🔒  </h1>
    
    <div className="container">
    <form className="form">
    {msg}
    <div class="form-group">
    <label for="email">Password-Category:</label>
    <input type="text" className="form-control" placeholder="enter category" onChange={e=>setCategory(e.target.value)}/>
</div>

<div class="form-group">
    <label for="email">Password</label>
    <input type="text" className="form-control"  placeholder="enter password" onChange={e=>setPassword(e.target.value)}/>
    </div>
    <Ripples>
    {ActionButton}
    </Ripples>
    </form>
    </div>
    </div>
  );
}


const mapStatetoProps=(state)=>{
    return{
        category:state.pass.category,
        password:state.pass.password,
        action:state.pass.action,
        id:state.pass.id,
        user_id:state.user.user_id,
        msg:state.pass.msg
    }
}


const mapDispatchtoProps=(dispatch)=>{
return{
    addPassCat:function(category,user_id,password){
     dispatch(addPassCat(category,user_id,password));
    },
    updatePassCat:function(id,category,user_id,password){
      dispatch(updatePassCat(id,category,user_id,password));
      
    }
}
}

export default connect(mapStatetoProps,mapDispatchtoProps)(BookContainer);






