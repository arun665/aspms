import { SIGNUP_USER , LOGIN_USER, SET_CURRENT_USER , LOGOUT_USER} from "../action/userType.js";


const initialState={
    isLoggedin:false,
    username:'',email:'',user_id:'',password:'',confirmpassword:'',
    action:"Add",
    id:'',msg:'',signupmsg:''
   
}

const userReducer=(state=initialState,action)=>{

    switch(action.type){
        case SIGNUP_USER:return{
            ...state,
            signupmsg:action.payload,
    
        }
      
      case LOGIN_USER:return{
        ...state,
       msg:action.payload,
        isLoggedin:action.isLoggedIn

    }

         
    case SET_CURRENT_USER:return{
        ...state,
       username:action.payload,
       user_id:action.payload,
        isLoggedin:true

    }

  
  
         
    case LOGOUT_USER:return{
        ...state,
        isLoggedin:false

    }
    

        default:return state
    }

}

export default userReducer;