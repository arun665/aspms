import axios from 'axios';

import {ADD_PASSCAT , FETCH_PASSCAT ,EDIT_PASSCAT , UPDATE_PASSCAT ,DELETE_PASSCAT} from './passType.js';


export const addPassCat=(category,user_id,password)=>{

  return function(dispatch){
    var OPTIONS= {
        method: 'POST',
        url: 'https://aspmsserver.herokuapp.com/api/addcategory',
        data:{password_category:category,user_id:user_id,password:password},
        headers: {
          Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZhcnVuIHNoYXJtIGEiLCJpYXQiOjE2MTc5NzI2NDgsImV4cCI6MTYxNzk3NjI0OH0.iZbwDYeGggwn9GzbbEBQffmU9-S2bezd7L0PUTywHCM',
          'Content-Type': 'application/json'
        }
      };
var message;
      axios(OPTIONS).then(res=>
        {
          message=res.data.message;
          console.log(message);


          console.log(res);
          dispatch({
            type:ADD_PASSCAT,
            payload:category,
            password:password,
            msg:res.data.message
        })
        }).catch(err=>console.log(err));

      }

   
}



export const fetchPassCat=(user_id)=>{
console.log(user_id);
    return function(Dispatch){
    var OPTIONS= {
        method: 'GET',
        url: 'https://aspmsserver.herokuapp.com/api/getpasscat/'+ user_id,
    
        headers: {
          Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZhcnVuIHNoYXJtIGEiLCJpYXQiOjE2MTc5NzI2NDgsImV4cCI6MTYxNzk3NjI0OH0.iZbwDYeGggwn9GzbbEBQffmU9-S2bezd7L0PUTywHCM',
          'Content-Type': 'application/json'
        }
      };

      axios(OPTIONS).then(res=>
        {
          
   

          Dispatch(getPassCat(res.data));

        }
      )
      .catch(err=>console.log(err));
      




}


}

export const getPassCat =(categories)=>{
    return {
        type:FETCH_PASSCAT,
        payload:categories
    }
}



export const editPassCat =(id,categories)=>{
  return {
      type:EDIT_PASSCAT,
      payload:categories
  ,id:id
    }
}



export const updatePassCat =(id,categories,password)=>{

  var OPTIONS= {
    method: 'PATCH',
    url: 'http://localhost:5000/api/updatecategory',
    data:{id:id,category:categories,password:password},
    headers: {
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZhcnVuIHNoYXJtIGEiLCJpYXQiOjE2MTc5NzI2NDgsImV4cCI6MTYxNzk3NjI0OH0.iZbwDYeGggwn9GzbbEBQffmU9-S2bezd7L0PUTywHCM',
      'Content-Type': 'application/json'
    }
  };

  axios(OPTIONS).then(res=>
    console.log(res)).catch(err=>console.log(err));

  return {

      type:UPDATE_PASSCAT,
      payload:categories,
      password:password
  ,id:id
    }
}

export const deletePassCat=(id)=>{

  var OPTIONS= {
    method: 'DELETE',
    url: 'http://localhost:5000/api/deletecategory',
    data:{id:id},
    headers: {
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZhcnVuIHNoYXJtIGEiLCJpYXQiOjE2MTc5NzI2NDgsImV4cCI6MTYxNzk3NjI0OH0.iZbwDYeGggwn9GzbbEBQffmU9-S2bezd7L0PUTywHCM',
      'Content-Type': 'application/json'
    }
  };

  axios(OPTIONS).then(res=>
    console.log(res)).catch(err=>console.log(err));

  return {

      type:DELETE_PASSCAT,
      payload:id
 
    }
}