import { useReducer , useEffect } from 'react';

import {useSelector,useDispatch} from "react-redux";
import {fetchPassCat, editPassCat ,deletePassCat} from "../redux/action/bookAction.js";

import React from 'react';   
import ReactDOM from 'react-dom';   
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './sass/table.scss';
  


function getPassCatContainer(){

  const user_id=useSelector(state=>state.user.user_id);
console.log(user_id);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchPassCat(user_id));
    })
    const allCategories=useSelector(state=>state.pass.allCategories);
    console.log(allCategories);

    if(allCategories){
      
    var AllCat=allCategories.map((val,i)=>(
        <tr key={i}>
        <td key={val._id}>{i+1}</td>
        
     
          <td > {val.passord_category}</td>
          <td > {val.password}</td>
          
         <td><Button className="btn btn-outline-danger"  onClick={()=>DeleteCategory(val._id)}>Delete</Button></td>
        </tr>
      ))
    }
    else{
    
     AllCat=<tr >
        <td colspan="2"> no data is found </td>
        </tr>
      
    }

    const EditCategory=(id,category)=>{
      dispatch(editPassCat(id,category));
    }
const DeleteCategory=(id)=>{
  dispatch(deletePassCat(id));
}

    return(
        <div id="table">
        <h1> Password List 🔒📑</h1>
        <Table striped bordered hover>
  <thead>
    <tr>
    <th > S.No.</th>
 
      <th scope="col">category name</th>
      <th scope="col">category password</th>
  
    </tr>
  </thead>
  <tbody>
  {
    AllCat}
  </tbody>
</Table>
        </div>
    );
}


export default getPassCatContainer;