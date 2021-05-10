import  {SIGNUP_USER , LOGIN_USER , SET_CURRENT_USER , LOGOUT_USER} from "./userType.js";
const axios =require("axios");



export const signupUser=(username,email,password,confirmpassword)=>{

    return function(dispatch){
    var OPTIONS= {
        method: 'POST',
        url: 'https://aspmsserver.herokuapp.com/userapi/signup',
        data:{username:username,email:email,password:password,confirmpassword:confirmpassword},
          'Content-Type': 'application/json'
       
      };

      axios(OPTIONS).then(res=>{
    

        
        console.log(res)
        var result=res.data.message;

        if(result === "User Registered Successfully"){


            dispatch(currentuser(username));
 dispatch(
    {
        type:SIGNUP_USER,
        payload:res.data.message,
        isLoggedIn:true
    })

}
else {
    dispatch(
        {
            type:SIGNUP_USER,
            payload:res.data.message,
            isLoggedIn:false
        })
    
}

    }).catch(err=>console.log(err));



}

}




export const loginUser=(username,password)=>{

    return function(dispatch){
    var OPTIONS= {
        method: 'POST',
        url: 'https://aspmsserver.herokuapp.com/userapi/signin',
        data:{username:username,password:password},
          'Content-Type': 'application/json'
       
      };



      axios(OPTIONS).then(res=>{
    


        console.log(res)
        var result=res.data.message;

        if(result === "user registered successfully"){


            dispatch(currentuser(username));
 dispatch(
    {
        type:LOGIN_USER,
        payload:res.data.message,
        isLoggedIn:true
    })

}
else {
    dispatch(
        {
            type:LOGIN_USER,
            payload:res.data.message,
            isLoggedIn:false
        })
    
}

    }).catch(err=>console.log(err));

}

}


export const currentuser=(username)=>{

return   { type:SET_CURRENT_USER,
      payload:username
}
}


export const logout=()=>{

    return function(dispatch){
console.log("logged out")     
         dispatch(currentuser(""))

         dispatch({
             type:LOGOUT_USER
            })
    
    }
}
